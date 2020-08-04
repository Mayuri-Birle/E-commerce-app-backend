const Sequelize = require('sequelize');
const db = require("../config/database");
const Product = db.define("Product", {
    // Model attributes are defined here
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
    },

}, {
    classMethods: {
        associate: function (models) {
            Product.belongsTo(models.Category, {
                foreignKey: {
                    allowNull: false
                }
            });
            Product.hasMany(models.Cart);
            Product.hasMany(models.Order);
        }
    },
});


// the defined model is the class itself
// console.log(Product === sequelize.models.Product); // true
module.exports = Product;