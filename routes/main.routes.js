const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const homeController = require("../controllers/home.controllers");
const postsController = require("../controllers/posts.controllers");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;