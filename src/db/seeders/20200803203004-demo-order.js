'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [{
        orderId: 1,
        quantity: 2,
        purchasePrice: 2.99,
        ccLast4: 2344,
        ProductId: 1,
        BillingId: 1,
        ShippingId: 1,
        UserId: 1
      }

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});

  }
};