/*
 * @Author       : Kevin Jobs
 * @Date         : 2022-03-18 11:20:09
 * @LastEditTime : 2022-03-18 11:44:35
 * @lastEditors  : Kevin Jobs
 * @FilePath     : \koa-restful-api\src\db\migrations\20220318032009-invitation-add-column.js
 * @Description  : 
 */
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const date = new Date();
    const aWeekLater = date.setDate(date.getDate()+7).valueOf();

    await queryInterface.addColumn(
      'Invitations',
      'expireAt',
      {
        type: Sequelize.NUMBER,
        allowNull: true,
        defaultValue: aWeekLater
      },
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Invitations', 'expireAt', { },)
  }
};
