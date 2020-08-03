const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class User extends Model {}

User.init({
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
    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true