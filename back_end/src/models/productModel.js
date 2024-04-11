const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "enter name"],
        unique: false
    },
    brand: {
        type: String,
        required: [true, "enter brand"],
        unique: false
    },
    price: {
        type: String,
        required: [true, "enter price"],
        unique: false
    },
    file: {
        type: String,
        required: [true, "enter file"],
        unique: false
    }
});

const Product = mongoose.model("products-database", productSchema);

module.exports = Product;