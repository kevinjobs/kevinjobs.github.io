'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Properties', {
      createAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      updateAt: { type: Sequelize.NUMBER, allowNull: true, defaultValue: new Date().valueOf(), },
      id: { type: Sequelize.INTEGER, allowNull: true, autoIncrement: true, primaryKey: true, },
      uid: { type: Sequelize.UUID, allowNull: true, defaultValue: Sequelize.UUIDV4, unique: true },
      platform: {
        type: Sequelize.STRING
      },
      totalAmount: {
        type: Sequelize.INTEGER
      },
      currency: {
        type: Sequelize.STRING
      },
      children: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Properties');
  }
};