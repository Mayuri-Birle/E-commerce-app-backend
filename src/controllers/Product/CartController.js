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
        include: [Product]
    }).then(function (addedItem) {
        res.json(addedItem);

    }).catch(function (err) {
        console.log(err.message);
        response.send(err);
    });



};

const AddCart = async (req, res) => {
    let item_added = await Cart.create({
        UserId: request.user.id,
        ProductId: request.params.itemId,
        quantity: request.body.quantity, // TODO 

    }).then(function (addedItem) {
        res.json(addedItem);

    }).catch(function (err) {
        console.log(err.message);
        res.send(err);
    });

}

const UpdateCart = async (req, res) => {
    let item_updated = await Cart.update({
            quantity: req.body.quantity
        }, {
            where: {
                UserId: req.user.id,
                ProductId: req.params.itemId
            },
            include: [Product]
        }).then(function (cartItems) {
            res.json(cartItems);

        })
        .catch(function (err) {
            console.log(err.message);
            res.send(err);
        });
}
const DeleteItemFromCart = async (req, res) => {
    let item_deleted = await Cart.destroy({
        where: {
            UserId: req.user.id,
            id: req.params.itemId,
        }
    }).then(function () {
        res.json('Item deleted')
    }).catch(function (err) {
        console.log(err.message);
        res.send(err);
    });

}

module.exports = {
    GetCart,
    AddCart,
    UpdateCart,
    DeleteItemFromCart
}