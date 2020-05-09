import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.STRING,
        height: Sequelize.STRING,
        weight: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return Student;
  }
}
export default Student;
