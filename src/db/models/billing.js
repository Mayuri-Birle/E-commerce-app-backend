const Sequelize = require("sequelize");
const db = require("../config/database");
const Billing = db.define("Billing", {

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
    classMethods: {
        associate: function (models) {
            Billing.hasMany(models.Order);
        }
    },
    timestamps: false
});



// the defined model is the class itself
// console.log(Billing === sequelize.models.Billing); // true

module.exports = Billing;