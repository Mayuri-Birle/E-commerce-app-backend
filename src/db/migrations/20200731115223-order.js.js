'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,

      },
      orderId: {
        type: Sequelize.INTEGER
      },
      product: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      quantity: {
        type: Sequelize.STRING,
      },
      purchasePrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  }
};