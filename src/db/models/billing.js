const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class Billing extends Model {}

Billing.init({
    // Model attributes are defined here

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    billingName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    billingAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    billingCity: {
        type: Sequelize.STRING,
        allowNull: false
    },
    billingState: {
        type: Sequelize.STRING,
        allowNull: false
    },
    billingZip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [5]
        }
    },
    billingCountry: {
        type: Sequelize.STRING,
    },
    billingPhone: {
        type: Sequelize.STRING,
        validate: {
            len: [0, 10]
        }
    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Billing' // We need to choose the model name
});

// the defined model is the class itself
console.log(Billing === sequelize.models.Billing); // true