const {

  createdResponse,
  validationError,
} = require("../../global_functions");
const User = require('../../db/models/user');
const {
  Sequelize
} = require("sequelize");

const signUp = async (req, res, next) => {
  const newUser = await User.create(req.body).then((user) => {
      res.json(user);
    })
    .catch(Sequelize.ValidationError, err => {
      return validationError(res, newUser, "Validation error");
    });

  return createdResponse(res, newUser, "new user created");
}

module.exports = {
  signUp
}