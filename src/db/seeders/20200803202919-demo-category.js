'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Category',
      [{
          name: "Chocolate"
        },
        {
          name: "Hard Candy"
        },
        {
          name: "Chewy & Gummy"
        },
        {
          name: "Bubblegum"
        },
        {
          name: "Haribo!"
        }


      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Category', null, {});

  }
};