const express = require("express");
const router = express.Router();

// import user controller.
const UserController = require("../controllers/index").UserController;
const AuthController = require("../controllers/index").AuthController;
const IndexController = require('../controllers/index').IndexController;
// API Routes for User
router.post("/user/signup", AuthController.signUp);
router.post("/user/login", AuthController.login);
router.post("/user", UserController.AddUser);
router.get("/user/:id", UserController.GetUser);
router.get("/users", UserController.GetUsers);
router.put("/user/:id", UserController.UpdateUser);
router.delete("/user/:id", UserController.RemoveUser);
router.get("/getproduct", AuthController.protect, UserController.GetProduct);
router.get('/products', IndexController.index);
// export router;
module.exports = router;