import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        price: Sequelize.FLOAT,
        duration: Sequelize.INTEGER,
        deleted: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return Plan;
  }
}
export default Plan;
