import * as Yup from 'yup';

import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plan = await Plan.findAll({
      attributes: ['id', 'title', 'price', 'duration'],
      order: ['duration'],
      where: { deleted: false },
    });
    return res.json(plan);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      price: Yup.number().required(),
      duration: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação' });
    }
    const { title, price, duration } = req.body;

    const checkPlan = await Plan.findOne({ where: { title } });

    if (checkPlan) {
      return res.status(400).json({ error: 'Este plano já existe' });
    }

    Plan.create({ ...req.body, deleted: false });

    return res.json({
      title,
      price,
      duration: `${duration} days`,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      price: Yup.string(),
      duration: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação' });
    }

    const plan = await Plan.findByPk(req.params.planId);

    const { duration, price, title } = await plan.update(req.body);

    return res.json({ title, duration, price });
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.planId);
    await plan.update({ deleted: true });
    return res.json();
  }
}

export default new PlanController();
