'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.changeColumn('customer_details', 'phone', {
      type: Sequelize.BIGINT
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.changeColumn('customer_details', 'phone', {
      type: Sequelize.INTEGER  
    })
  }
};
