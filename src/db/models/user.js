const bcrypt = require("bcrypt-nodejs");
const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "Users", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter your name",
        },
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,

      validate: {
        isEmail: true,
        notNull: {
          msg: "Please enter your email",
        },
      },
    },
    photo: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      // set(value) {
      //   this.setDataValue('password', hash(this.password))
      // },
      allowNull: false,
      validate: {
        min: 8,
        notNull: {
          msg: "Please enter the password",
        },
      },
    },
    passwordConfirm: {
      type: Sequelize.STRING,
      allowNull: false,

      validate: {
        //This only works on SAVE!!!!!!
        customValidator(value) {
          return value === this.password;
        },
        notNull: {
          msg: "Please enter the password",
        },
      },
    },



  }, {
    instanceMethods: {
      validPassword: function (password) {
        return bcrypt.compareAsync(password, this.password)
      }
    }
  }


);



User.beforeCreate((user, options) => {
  // user.password // Will check if field is there or not
  // user.password != "" // check if empty or not
  var salt = bcrypt.genSaltSync(10);

  user.password = user.password && user.password != "" ? bcrypt.hashSync(user.password, salt) : "";

  user.passwordConfirm = user.passwordConfirm && user.passwordConfirm != "" ? bcrypt.hashSync(user.passwordConfirm, salt) : "";
})
User.prototype.toJSON = function () {
  var values = Object.assign({}, this.get());

  delete values.password;
  delete values.passwordConfirm;

  return values;
}

module.exports = User;