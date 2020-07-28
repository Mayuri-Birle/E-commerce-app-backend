const {
  validationError,
  badRequestError,
  unverifiedError,
  wrongInfo,
} = require("../../global_functions");
const jwt = require('jsonwebtoken');
const User = require('../../db/models/user');
const {
  Sequelize
} = require("sequelize");

const signToken = id => {
  return jwt.sign({
    id
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

const signUp = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);

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
  const user = User.findOne({
    where: {
      email: req.body.email
    }
  });


  if (!user || !(await user.validPassword(password, user.password))) {
    return wrongInfo(res, 'Incorrect email or password');
  }
  //if everything is ok send the token to client
  const token = signToken(user._id);
  res.status(200).json({
    status: 'sucsess',
    token
  });
}

module.exports = {
  signUp,
  login
}