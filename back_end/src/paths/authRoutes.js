const express = require("express");
const authController = require("../controllers/authController");
const middleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/api/signup", authController.signup_post);

router.post("/api/login", authController.login_post);

router.get("/api/logout", authController.logout_get);

router.get("/api/check_user", middleware.check_user);

router.post("/api/find_user", middleware.find_user);

router.post("/api/modify_orders", middleware.modify_orders);

module.exports = router;