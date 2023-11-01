'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('order_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      customer_id: {type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'customer_details',
          key: 'id'
        }
      },
      product_name: Sequelize.STRING,
      quantity: Sequelize.INTEGER,
      price: Sequelize.BIGINT,
      payment_type: Sequelize.STRING,
      payment_status: Sequelize.STRING,
      created_at: Sequelize.DATE, 
      updated_at: Sequelize.DATE
     })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('order_details');
  }
};
