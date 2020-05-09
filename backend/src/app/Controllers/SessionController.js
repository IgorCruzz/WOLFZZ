import Student from '../models/Student';

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    const student = await Student.findOne({
      where: { id },
    });

    if (!student) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    return res.json({
      student,
    });
  }
}

export default new SessionController();
