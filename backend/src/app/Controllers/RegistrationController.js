import * as Yup from 'yup';
import { addDays } from 'date-fns';
import Registration from '../models/Registration';
import Student from '../models/Student';
import Plan from '../models/Plan';
import RegistrationMail from '../jobs/RegistrationMail';
import Queue from '../../lib/Queue';

class RegistrationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.string().required(),
      plan_id: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação' });
    }
    const { student_id, plan_id } = req.body;

    const plan = await Plan.findByPk(plan_id);

    const student = await Student.findByPk(student_id);
    if (!student) {
      return res.status(400).json({ error: 'Id invalido' });
    }

    const checkRegistration = await Registration.findOne({
      where: { student_id },
    });
    if (checkRegistration) {
      return res.status(400).json({ error: 'O aluno já esta matriculado' });
    }

    const registration = await Registration.create({
      ...req.body,
      start_date: new Date(),
      end_date: addDays(new Date(), plan.duration),
      price: plan.price,
    });

    await Queue.add(RegistrationMail.key, {
      plan,
      student,
    });

    return res.json(registration);
  }

  async index(req, res) {
    const registrations = await Registration.findAll({
      attributes: ['id', 'price', 'start_date', 'end_date'],

      include: [
        { model: Student, as: 'student', attributes: ['id', 'name', 'email'] },
        { model: Plan, as: 'plan', attributes: ['id', 'title'] },
      ],
    });

    return res.json(registrations);
  }

  async delete(req, res) {
    await Registration.destroy({ where: { id: req.params.regisId } });
    return res.json();
  }

  async update(req, res) {
    const student = await Registration.findByPk(req.params.regisId);
    const { plan_id } = req.body;
    const plan = await Plan.findByPk(plan_id);

    const showUpdate = await student.update({
      plan_id,
      end_date: addDays(student.start_date, plan.duration),
      price: plan.price,
    });

    return res.json(showUpdate);
  }
}
export default new RegistrationController();
