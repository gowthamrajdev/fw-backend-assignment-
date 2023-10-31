'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('customer_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      phone: {type: Sequelize.INTEGER, unique: true},
      address_line_one: Sequelize.STRING,
      pin_code: Sequelize.INTEGER,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      created_at: Sequelize.DATE, 
      updated_at: Sequelize.DATE
     })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('customer_details');
  }
};
