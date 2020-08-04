'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [{
        name: "Truffles",
        price: 15.59,
        img: "https://www.candywarehouse.com/assets/item/regular/french-mint-filled-dark-chocolate-truffles.jpg",
        description: "Succulent morsels of decadent dark chocolate with exquisite truffle fillings",
        quantity: 145,
        CategoryId: 1
      },
      {
        name: "Pico-Balla",
        price: 5.19,
        img: "https://images-na.ssl-images-amazon.com/images/I/613pCvZqzDL.jpg",
        description: "Great and tasty Gummy candiesThis lot contains one pack. Free shipping worldwide. Package weight is 175g",
        quantity: 100,
        CategoryId: 5
      },
      {
        name: "Kisses",
        price: 13.59,
        img: "https://images-na.ssl-images-amazon.com/images/I/61JudlWjJDL._AC_US436_QL65_.jpg",
        description: "An American Classic, Hershey KISSES are bite-sized PIECES of chocolate with a unique shape and wrapped in colorful foil.",
        quantity: 100,
        CategoryId: 1
      },
      {
        name: "Baerchen",
        price: 4.77,
        img: "https://images-na.ssl-images-amazon.com/images/I/911Jj5qqvLL._SX522_.jpg",
        description: "Imported from Germany",
        quantity: 100,
        CategoryId: 5
      },
      {
        name: "Gummy Bears",
        price: 24.99,
        img: "https://s3.amazonaws.com/kidzworld_photo/images/2016323/5b89be7a-ff3c-45c6-a065-aec7839c9e97/gummybears-inarow.jpg",
        description: "An American Classic, Hershey KISSES are bite-sized PIECES of chocolate with a unique shape and wrapped in colorful foil.",
        quantity: 345,
        CategoryId: 3
      },
      {
        name: "Gummy Worms",
        price: 24.99,
        img: "https://nuts.com/images/auto/510x340/assets/a5ffff18e31d4576.jpg",
        description: "Fat free candy worms made with real fruit juice and colors from natural sources",
        quantity: 245,
        CategoryId: 3
      },
      {
        name: "Weinland",
        price: 4.58,
        img: "https://images-na.ssl-images-amazon.com/images/I/91W6D8gGNWL._SY679_.jpg",
        description: "Haribo Weinland Weingummi, 1er Pack (1 x 200 g Beutel)",
        quantity: 100,
        CategoryId: 5
      },
      {
        name: "Peanut Nougat",
        price: 13.99,
        img: "https://i0.wp.com/kitchensanctuary.com/wp-content/uploads/2015/10/Chocolate-peanut-nougat-square-2.jpg",
        description: "Rich, creamy whipped nougat with peanut bits",
        quantity: 245,
        CategoryId: 1
      },
      {
        name: "Jawbreakers",
        price: 13.75,
        img: "https://images-na.ssl-images-amazon.com/images/I/61SS7N8hC1L._AC_US320_FMwebp_QL65_.jpg",
        description: "Longlasting, multiple layered candy balls",
        quantity: 200,
        CategoryId: 2
      },
      {
        name: "Little Cupcakes",
        price: 6.09,
        img: "https://images-na.ssl-images-amazon.com/images/I/71vZb6hftAL._SX522_.jpg",
        description: "imported from Germany - Not available in US-Stores Original Germany Haribo sweets175g/6.17oz",
        quantity: 100,
        CategoryId: 5
      },
      {
        name: "Dubble Bubble Gum",
        price: 14,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQidRDqlsb6e3X36Wzq29GDdn4EDVcR58-fmMbODtcZ377KcHF8yv-C3i2b-3sZyrWdVoaKb4DR&usqp=CAE",
        description: "Chewing gum, designed to freshen breath and to be inflated out of the mouth as a bubble",
        quantity: 100,
        CategoryId: 4
      },
      {
        name: "Fizzy Cola",
        price: 5.76,
        img: "https://images-na.ssl-images-amazon.com/images/I/9168m9gMN1L._SX522SX522_SY628_CR,0,0,522,628_PIbundle-12,TopRight,0,0_SX522_SY628_CR,0,0,522,628_SH20_.jpg",
        description: "Happy-Cola gummies with sour, sweet, and tangy coating",
        quantity: 100,
        CategoryId: 5
      },
      {
        name: "Saure Pommes",
        price: 5.56,
        img: "https://images-na.ssl-images-amazon.com/images/I/91ze9qBQDRL._SY679_.jpg",
        description: "Haribo Saure Pommes Gummi Candy 200 g",
        quantity: 100,
        CategoryId: 5
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});

  }
};