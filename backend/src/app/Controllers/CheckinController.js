import { startOfWeek, endOfWeek } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async store(req, res) {
    const student = await Student.findByPk(req.params.id);
    const actualDate = new Date();

    const verifyCheckins = await Checkin.findAll({
      where: {
        student_id: req.params.id,
        created_at: {
          [Op.between]: [startOfWeek(actualDate), endOfWeek(actualDate)],
        },
      },
    });

    if (verifyCheckins.length >= 5) {
      return res.status(400).json({
        error: 'Você já bateu o limite dessa semana, aproveite para descançar',
      });
    }

    const checkin = await Checkin.create({
      student_id: student.id,
    });

    return res.json(checkin);
  }

  async index(req, res) {
    const count = await Checkin.count();

    const checkin = await Checkin.findAll({
      where: { student_id: req.params.id },
      attributes: ['id', 'created_at'],
      include: [{ model: Student, as: 'student', attributes: ['id', 'name'] }],
    });

    res.header('X-Total-Count', count);

    return res.json(checkin);
  }
}
export default new CheckinController();
