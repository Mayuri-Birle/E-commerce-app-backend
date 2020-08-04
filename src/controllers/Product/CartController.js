const {
    okResponse,
    badRequestError
} = require("../../global_functions");

const Cart = require("../../db/models/cart");
const Product = require("../../db/models/product");

const GetCart = async (req, res) => {
    let cart = await Cart.findAll({
        where: {
            UserId: req.user.id
        },
        include: [db.Product]
    })
}

module.exports = {
    GetCart
}