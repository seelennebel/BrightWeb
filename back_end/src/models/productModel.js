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
    }
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;