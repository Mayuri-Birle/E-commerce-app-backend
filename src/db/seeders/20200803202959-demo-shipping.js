'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Shipping',
      [{
          orderId: 1,
          shippingName: "Fred Lewis",
          shippingAddress: "1735 N Wells St",
          shippingCity: "Chicago",
          shippingState: "IL",
          shippingZip: 60610,
          shippingCountry: "USA",
          shippingPhone: "7734904221"
        }

      ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Shipping', null, {});

  }
};