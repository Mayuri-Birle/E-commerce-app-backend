// Import User Model
const User = require('../../db/models/user');
const Product = require('../../db/models/product');
// ROUTES

const GetCategories = async (req, res) => {
    //show all categories
    Category.findAll({}).then(function (categories) {
        res.json(categories);
    });
}


// show products by category name
const ShowCategory = async (req, res) => {
    let find_category = await sequelize.Promise.all([
        Product.findAll({
            where: {
                CategoryId: req.body.categoryId
            }
        }),
        Category.findAll({})
    ]).spread(function (products, categories) {
        res.json(products);
    })
}

// create new category
const AddNewCategory = async (req, res) => {
    let new_category = await Category.create({
            name: req.body.name
        }).then(function (result) {
            res.send("created " + req.body.name);
        })
        .catch(function (err) {
            console.log(err.message);
            res.send(err);
        });

}

module.exports = {
    GetCategories,
    ShowCategory,
    AddNewCategory
};