import * as Yup from 'yup';
import { Op } from 'sequelize';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(3),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .required()
        .positive(),
      weight: Yup.number()
        .required()
        .positive(),
      height: Yup.number()
        .required()
        .positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação' });
    }

    const { email } = req.body;

    const userExists = await Student.findOne({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Este usuário já existe' });
    }

    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().min(3),
      email: Yup.string().email(),
      weight: Yup.number().positive(),
      height: Yup.number().positive(),
      age: Yup.number().positive(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação' });
    }
    const student = await Student.findByPk(req.params.id);
    const result = await student.update(req.body);

    return res.json(result);
  }

  async show(req, res) {
    const students = await Student.findAll({ order: ['name'] });
    return res.json(students);
  }

  async delete(req, res) {
    await Student.destroy({ where: { id: req.params.id } });
    return res.json();
  }

  async index(req, res) {
    const { name } = req.query;
    const student = await Student.findAll({
      where: { name: { [Op.startsWith]: `${name}%` } },
    });

    return res.json(student);
  }
}

export default new StudentController();
