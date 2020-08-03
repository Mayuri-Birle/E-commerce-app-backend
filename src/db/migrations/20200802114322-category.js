'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Category", {

      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
      }


    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Category');

  }
};