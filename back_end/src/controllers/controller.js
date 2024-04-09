const Product = require("../models/productModel");

module.exports.product_get = (req, res) => {

};

module.exports.product_post = async (req, res) => {
    //const { name, brand, price } = req.body;
    console.log(req.body);
    res.send(req.body);

    /*
    try {
        const product = await Product.create( {name, brand, price })

        res.status(201).json(product);
    }
    catch (error) {
        console.log(error);
    }
    */
};