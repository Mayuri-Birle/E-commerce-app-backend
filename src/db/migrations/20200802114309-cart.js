'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cart", {

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {}
      },


    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Cart');

  }
};