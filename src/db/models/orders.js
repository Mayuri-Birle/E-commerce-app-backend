const Sequelize = require('sequelize');
const db = require("../config/database");
const Orders = db.define("Orders", {
    orderId: {
        type: Sequelize.INTEGER
    },
    product: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    quantity: {
        type: Sequelize.STRING,
    },
    purchasePrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    classMethods: {
        associate: function (models) {
            Order.belongsTo(models.Product);
            Order.belongsTo(models.User);
            Order.belongsTo(models.Billing, {
                foreignKey: {
                    allowNull: false,
                    targetKey: 'orderId'
                }
            });

            Order.belongsTo(models.Shipping, {
                foreignKey: {
                    allowNull: false,
                    targetKey: 'orderId'
                }
            });
        }
    },
});
// console.log(Orders === sequelize.models.Orders); // true
module.exports = Orders;