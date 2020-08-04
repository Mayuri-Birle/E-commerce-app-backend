const UserController = require("./user/UserController");
const AuthController = require("./user/AuthController");
const IndexController = require("./user/indexController");
const CartController = require("./Product/CartController");
const CategoriesController = require("./Product/CategoriesController");
const OrdersController = require("./Product/OrdersController");
const ProductsController = require("./Product/ProductsController");
module.exports = {
    UserController,
    AuthController,
    IndexController,
    CartController,
    CategoriesController,
    OrdersController,
    ProductsController,
}