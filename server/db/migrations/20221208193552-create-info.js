module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      profileName: {
        type: Sequelize.STRING,
      },
      contactOne: {
        type: Sequelize.STRING,
      },
      contactTwo: {
        type: Sequelize.STRING,
      },
      contactThree: {
        type: Sequelize.STRING,
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Infos');
  },
};
