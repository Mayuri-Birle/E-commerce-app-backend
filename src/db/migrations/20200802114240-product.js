'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Product", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {}
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {}
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {}
      },
      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }

    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Product');

  }
};