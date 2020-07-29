const {
  validationError,
  badRequestError,
  unverifiedError,
  wrongInfo,
} = require("../../global_functions");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const User = require("../../db/models/user");
const {
  Sequelize
} = require("sequelize");

const signToken = (id) => {
  return jwt.sign({
      id,
    },
    "mylife-manysecrets-helloworld2020s", {
      expiresIn: "1h",
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

    res.status(201).json({
      status: "sucsess",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
    return validationError(res, "user not created");
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
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(user);
    console.log(user.password);
    console.log(req.body.password);
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!user || !validPassword) {
      return res.status(401).json({
        status: 401,
        message: "Incorrect email or password",
      });
    }

  } catch (error) {
    next(error);
  }
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  //if everything is ok send the token to client
  const token = signToken(user._id);
  return res.status(200).json({
    status: "success",
    token,
  });

};

module.exports = {
  signUp,
  login,
};