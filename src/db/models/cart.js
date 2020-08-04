const Sequelize = require("sequelize");
const db = require("../config/database");

const Cart = db.define("Cart", {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {}
    },

}, {
    classMethods: {
        associate: function (models) {
            Cart.belongsTo(
                models.Product
            ), Cart.belongsTo(models.Users);
        }
    }

});

console.log(Cart === sequelize.models.Cart); // true
module.exports = Cart