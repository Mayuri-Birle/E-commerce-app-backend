'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Shipping", {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      shippingName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shippingAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shippingCity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shippingState: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shippingZip: {
        type: Sequelize.INTEGER,
        validate: {
          len: [5]
        }
      },
      shippingCountry: {
        type: Sequelize.STRING,
      },
      shippingPhone: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 10]
        }
      },
      orderId: {
        type: Sequelize.INTEGER
      }


    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Shipping');

  }
};