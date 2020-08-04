const Sequelize = require("sequelize");
const db = require("../config/database");
const Category = db.define("Category", { // Model attributes are defined here
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {}
    }
}, {
    classMethods: {
        associate: function (models) {
            Category.hasMany(models.Product);
        }
    },
    //timestamps: false
});


// the defined model is the class itself
// console.log(User === sequelize.models.User); // true
module.exports = Category;