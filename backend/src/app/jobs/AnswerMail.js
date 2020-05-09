import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { answer, email } = data;
    Mail.sendMail({
      to: email,
      subject: 'WOLFZZ GYM - RESPOSTA',
      template: 'answer',
      context: {
        answer,
      },
    });
  }
}
export default new AnswerMail();
