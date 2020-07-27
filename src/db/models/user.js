const bcrypt = require("bcrypt-nodejs");
const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "Users",
  {
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
  },
  {
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      },
    },
  }
);

module.exports = User;
