const {
  unAuthorizedError,
  badRequestError,
  okResponse,
} = require("../../global_functions");
const {
  promisify
} = require('util');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../db/models/user");
const {
  Sequelize,
  UniqueConstraintError
} = require("sequelize");
const {
  JWT_SECRET,
  JWT_EXPIRES_IN
} = require("../../db/config");

const signToken = (id) => {
  return jwt.sign({
      id: id,
    },
    JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    }
  );
};

const signUp = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
    const token = signToken(newUser._id);
    newUser.token = token;
    console.log(token);
    return okResponse(res, newUser, "SignUp Successful");
  } catch (err) {
    return badRequestError(res, err);
  }

};

const login = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  //if email and password actually exist
  if (!email || !password) {
    return badRequestError(res, "Please provide email and password");
  }

  //check if the user exist and the password is correct

  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (user === undefined) return badRequestError(res, "Invalid email");
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword)
    return unAuthorizedError(res, "Incorrect password or email");

  //if everything is ok send the token to client
  const token = signToken(user._id);
  return okResponse(res, "Logged In");
};

const protect = async (req, res, next) => {
  let token;
  //Getting token and check of it's there
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      unAuthorizedError(res, 'You are not logged in')
    );
  }
  // verification token


  const decoded = await promisify(jwt.verify)(token, JWT_SECRET);
  console.log(decoded);
  //check if user still exists

  //check if user changed password after token is issued



  next();
};

module.exports = {
  signUp,
  login,
  protect,
};