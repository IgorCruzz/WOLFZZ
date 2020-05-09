import * as Yup from 'yup';
import Order from '../models/Order';

class StudentOrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação' });
    }
    const { question } = req.body;

    const questions = await Order.create({
      question,
      student_id: req.params.id,
    });
    return res.json(questions);
  }

  async index(req, res) {
    const showOrder = await Order.findAll({
      where: { student_id: req.params.id },
    });
    return res.json(showOrder);
  }
}
export default new StudentOrderController();
