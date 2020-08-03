'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Billing", {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      billingName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billingAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billingCity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billingState: {
        type: Sequelize.STRING,
        allowNull: false
      },
      billingZip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      billingCountry: {
        type: Sequelize.STRING,
      },
      billingPhone: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 10]
        }
      }



    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Billing');

  }
};