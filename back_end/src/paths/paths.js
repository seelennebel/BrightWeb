const express = require("express");

const controller = require("../controllers/controller")

const router = express.Router();

// get one product
router.get("/api/product/:name", controller.product_get);

// search products
router.get("/api/products/:name", controller.product_get);

router.get("/api/products", controller.all_products_get);

// create product
router.post("/api/product", controller.product_post);

module.exports = router;