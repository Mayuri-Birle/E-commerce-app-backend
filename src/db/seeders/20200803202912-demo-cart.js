'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cart', [{
        UserId: 1,
        ProductId: 1,
        quantity: 2
      },
      {
        UserId: 2,
        ProductId: 3,
        quantity: 1
      },
      {
        UserId: 3,
        ProductId: 1,
        quantity: 1

      },
      {
        UserId: 3,
        ProductId: 2,
        quantity: 4
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Cart', null, {});

  }
};