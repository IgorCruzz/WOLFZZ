import * as Yup from 'yup';
import Order from '../models/Order';
import Student from '../models/Student';
import Queue from '../../lib/Queue';
import AnswerMail from '../jobs/AnswerMail';

class GymOrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação' });
    }

    const { answer } = req.body;
    const orders = await Order.findByPk(req.params.id);

    const { email } = await Student.findByPk(orders.student_id);

    const showOrders = await orders.update({
      answer,
      answer_at: new Date(),
    });

    await Queue.add(AnswerMail.key, { answer, email });

    return res.json(showOrders);
  }

  async index(req, res) {
    const { question } = req.query;
    const showOrders = await Order.findAll({
      attributes: ['id', 'question', 'answer', 'answer_at'],
      include: [{ model: Student, as: 'student', attributes: ['id', 'name'] }],
      limit: 5,
      offset: question,
    });

    return res.json(showOrders);
  }

  async delete(req, res) {
    await Order.destroy({ where: { id: req.params.id } });
    return res.json();
  }
}
export default new GymOrderController();
