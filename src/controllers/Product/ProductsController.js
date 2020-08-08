// import model
const User = require('../../db/models/user');

// HTML routing
const GetAllProduct = async (req, res) => {
    let find_products = await sequelize.Promise.all([
        db.Product.findAll({}),
        db.Category.findAll({})
    ]).spread(function (products, categories) {
        res.json(products);

    });
}

const GetProduct = async (req, res) => {
    let find_product = await Product.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (product) {
        res.json(product)
    })

}

//create a product
const CreateProduct = async (req, res) => {
    let add_product = await Product.create({
        //product attributes on creation
        productName: req.body.productName
    }).then(function () {
        res.redirect('/products');
    }).catch(function (err) {
        console.log(err.message);
        response.send(err);
    });
}

//update prodcut
const UpdateProduct = async (req, res) => {
    let updated_product = await Product.update({
        // product attributes to update
    }, {
        where: {
            id: id
        }
    }).then(function () {
        res.redirect('/products/' + id);
    }).catch(function (err) {
        console.log(err.message);
        response.send(err);
    });
}

const RemoveProduct = async (req, res) => {
    let remove_product = await Product.destroy({
        where: {
            id: params.req.id
        }
    }).then(function () {
        res.redirect('/products');
    }).catch(function (err) {
        console.log(err.message);
        response.send(err);
    });
}


module.exports = {
    GetProduct,
    CreateProduct,
    GetAllProduct,
    UpdateProduct,
    RemoveProduct,

};