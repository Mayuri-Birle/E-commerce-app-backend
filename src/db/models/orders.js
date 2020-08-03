const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class Orders extends Model {}

Orders.init({
    // Model attributes are defined here
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
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Orders' // We need to choose the model name
});

// the defined model is the class itself
console.log(Orders === sequelize.models.Orders); // true