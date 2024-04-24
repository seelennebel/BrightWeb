const Product = require("../models/productModel");

module.exports.all_products_get = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        console.log(error);
    };
};

module.exports.products_get = async (req, res) => {
    try {
        const result = await Product.find({name : { $regex : req.params.name, $options : "i" }});
        console.log(result);
    }
    catch (error) {
        console.log(error);
    };
};

module.exports.product_get = async (req, res) => {
    try {
        const product = await Product.find({_id : req.params["productID"]});
        res.status(200).json(product);
    }
    catch (error) {
        console.log(error);
    };
};

module.exports.product_post = async (req, res) => {
    const { name, brand, price } = req.body;
    try {
        const product = await Product.create({ name, brand, price });
        res.status(201).json(product);
    }
    catch (error) {
        console.log(error);
    };
};