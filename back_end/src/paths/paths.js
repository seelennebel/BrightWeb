const express = require("express");

const controller = require("../controllers/controller")

const router = express.Router();

router.get("/api/product/:name", controller.product_get);

router.get("/api/products/:name", controller.product_get);

router.post("/api/product", controller.product_post);

module.exports = router;