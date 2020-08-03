const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class Cart extends Model {}

Cart.init({
    // Model attributes are defined here
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {}
    },

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Cart' // We need to choose the model name
});

// the defined model is the class itself
console.log(Cart === sequelize.models.Cart); // true