const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class User extends Model {}

User.init({
    // Model attributes are defined here
    shippingName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shippingCity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shippingState: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shippingZip: {
        type: DataTypes.INTEGER,
        validate: {
            len: [5]
        }
    },
    shippingCountry: {
        type: DataTypes.STRING,
    },
    shippingPhone: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 10]
        }
    },
    orderId: {
        type: DataTypes.INTEGER
    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true