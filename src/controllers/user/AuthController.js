const {

  createdResponse,
  validationError,
  badRequestError,
  okResponse,
} = require("../../global_functions");
const jwt = require('jsonwebtoken');
const User = require('../../db/models/user');
const {
  Sequelize
} = require("sequelize");

const signUp = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    const token = jwt.sign({
      id: newUser._id
    }, 'mylife-manysecrets-helloworld2020s', {
      expiresIn: '1h'
    });

    res.status(201).json({
      status: 'sucsess',
      token,
      data: {
        user: newUser
      }
    })
  } catch (err) {
    console.log(err);
    return validationError(res, "user not created");

  }
}

const login = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  //if email and password actually exist
  if (!email || !password) {
    return badRequestError(res, 'Please provide email and password');
  }

  //check if the user exist and the password is correct


  //if everything is ok send the token to client
  const token = ''
  res.status(200).json({
    status: 'sucsess',
    token
  });
}

module.exports = {
  signUp,
  login
}