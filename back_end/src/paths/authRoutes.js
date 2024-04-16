const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/api/signup", authController.signup_post);

router.post("/api/login", authController.login_post);

module.exports = router;