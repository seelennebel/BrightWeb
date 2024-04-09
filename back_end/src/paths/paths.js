const express = require("express");

const controller = require("../controllers/controller")

const router = express.Router();

//router.get("/api/products");

//router.get("api/product");

router.post("/api/product", controller.product_post);

module.exports = router;