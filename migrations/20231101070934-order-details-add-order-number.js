'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('order_details', 'order_number', {
      type: Sequelize.BIGINT
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'order_details',
      'order_number'
    );
  }
};
