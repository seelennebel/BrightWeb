const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "enter name"],
        unique: true
    },
    brand: {
        type: String,
        required: [true, "enter brand"],
        unique: false
    },
    price: {
        type: Number,
        required: [true, "enter price"],
        unique: false
    },
    file: {
        type: String,
        required: [true, "enter file"],
        unique: false
    },
    description: {
        type: String,
        required: [true, "enter description"],
        unique: false
    }
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;