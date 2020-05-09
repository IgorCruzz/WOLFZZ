import { addDays, format } from 'date-fns';
import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { student, plan } = data;

    const lastDay = addDays(new Date(), plan.duration);
    Mail.sendMail({
      to: student.email,
      subject: 'NOVA MATRICULA',
      template: 'welcome',
      context: {
        student: student.name,
        plan: plan.title,
        price: plan.price,
        validate: format(lastDay, 'dd/MM/yyyy'),
      },
    });
  }
}
export default new RegistrationMail();
