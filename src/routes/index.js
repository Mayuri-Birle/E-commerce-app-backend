const express = require("express");
const router = express.Router();

// import user controller.
const UserController = require("../controllers/index").UserController;
const AuthController = require("../controllers/index").AuthController;
const ProductsController = require("../controllers/index").ProductsController;
const CartController = require("../controllers/index").CartController;
const CategoryController = require("../controllers/index").CategoriesController;
const OrdersController = require("../controllers/index").OrdersController;
const IndexController = require('../controllers/index').IndexController;
// API Routes for User
router.post("/user/signup", AuthController.signUp);
router.post("/user/login", AuthController.login);
router.post("/user", UserController.AddUser);
router.get("/user/:id", UserController.GetUser);
router.get("/users", UserController.GetUsers);
router.put("/user/:id", UserController.UpdateUser);
router.delete("/user/:id", UserController.RemoveUser);
router.get('/products', IndexController.index);

router.get('/cart', AuthController.protect, CartController.GetCart);
router.post('/cart/:itemId', AuthController.protect, CartController.AddCart);
router.put('/cart/:itemId', AuthController.protect, CartController.UpdateCart);
router.delete('/cart/:itemId', AuthController.protect, CartController.DeleteItemFromCart);

router.get('/categories', CategoryController.GetCategories);
router.post('/products/category/:categoryName', CategoryController.ShowCategory);
router.post('/category', CategoryController.AddNewCategory);

router.get('/products', ProductsController.GetAllProduct);
router.get('/products/:id', ProductsController.GetProduct);
router.post('/products', ProductsController.CreateProduct);
router.put('/products/:id', ProductsController.UpdateProduct);
router.delete('/products/:id', ProductsController.RemoveProduct);
// export router;
module.exports = router;