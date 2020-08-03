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
    const token = signToken(newUser.id);
    console.log(newUser.id);
    newUser.token = token;
    console.log(token);
    return okResponse(res, newUser, "SignUp Successful");
  } catch (err) {
    const user = User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      return badRequestError(res, err.errors[0].message);
    }
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

  return okResponse(res, token, "Logged In");
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

  try {
    // verification token

    const decoded = await promisify(jwt.verify)(token, JWT_SECRET);
    //check if user still exists

    const freshUser = await User.findByPk(decoded.id);
    if (!freshUser) {
      return next(
        unAuthorizedError(res, "Te user belonging to this token dows no longer exists")
      );
    }

  } catch (error) {
    res.send(error);
  }

  //check if user changed password after token is issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      unAuthorizedError(res, 'User recently changed password! Please log in again.', 401)
    );
  }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = freshUser;


  next();
};

module.exports = {
  signUp,
  login,
  protect,
};