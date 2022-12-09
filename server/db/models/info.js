const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userID',
      });
    }
  }
  Info.init({
    profileName: DataTypes.STRING,
    contactOne: DataTypes.STRING,
    contactTwo: DataTypes.STRING,
    contactThree: DataTypes.STRING,
    userID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Info',
  });
  return Info;
};
