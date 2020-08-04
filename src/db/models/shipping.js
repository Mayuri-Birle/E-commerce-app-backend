const Sequelize = require('sequelize');

const db = require("../config/database");
const Shipping = db.define('Shipping', {
    // Model attributes are defined here
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

}, {
    classMethods: {
        associate: function (models) {
            Shipping.hasMany(models.Order);
        }
    },
    timestamps: false
});

// the defined model is the class itself
console.log(Shipping === sequelize.models.Shipping); // true

module.exports = Shipping;