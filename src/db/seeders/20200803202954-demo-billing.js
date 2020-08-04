'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Billing', [{
        orderId: 1,
        billingName: "Fred Lewis",
        billingAddress: "1735 N Wells St",
        billingCity: "Chicago",
        billingState: "IL",
        billingZip: 60610,
        billingCountry: "USA",
        billingPhone: "7734904221"
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Billing', null, {});

  }
};