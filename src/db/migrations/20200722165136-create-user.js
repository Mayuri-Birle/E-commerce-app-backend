"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,

      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'The field cannot be empty'
          },
          notNull: {
            msg: "Please enter your name",
          },
        },
        field: 'name'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        lowercase: true,

        validate: {
          notEmpty: {
            msg: 'The field cannot be empty'
          },

          isEmail: {
            args: true,
            msg: "Please enter the valid email"
          },
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
          notEmpty: {
            msg: 'The field cannot be empty'
          },
          min: 8,
          notNull: {
            msg: "Please enter the password",
          },
        },
        field: 'password',
      },
      passwordConfirm: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter the password",
          },
        },
      },
      createdAt: {
        // allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        // allowNull: false,
        type: Sequelize.DATE,
      },
      passwordCreatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};