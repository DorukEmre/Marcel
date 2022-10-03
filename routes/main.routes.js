const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const homeController = require("../controllers/home.controllers");
const clustersController = require("../controllers/clusters.controllers");
const exploreController = require("../controllers/explore.controllers");
const postsController = require("../controllers/posts.controllers");
const profileController = require("../controllers/profile.controllers");
const spotController = require("../controllers/spot.controllers");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", homeController.getIndex);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// GET posts from all users
router.get("/feed", ensureAuth, postsController.getFeed);

// GET page to post new cat pictures
router.get("/spot", ensureAuth, spotController.getSpot);
// POST new cat pictures
// router.post("/spot", ensureAuth, spotController.getSpot);

// GET page to explore map of cats in the neighborhood
router.get("/explore", ensureAuth, exploreController.getExplore);

// GET page to manage clusters
router.get("/clusters", ensureAuth, clustersController.getClusters);
// POST to join new cluster
// router.post("/clusters", ensureAuth, clustersController.getClusters);
// DELETE to remove cluster
// router.delete("/clusters", ensureAuth, clustersController.getClusters);

// GET profile page
router.get("/profile", ensureAuth, profileController.getProfile);
// PUT update profile page
// router.put("/profile", ensureAuth, profileController.getProfile);
// DELETE profile
// router.delete("/profile", ensureAuth, profileController.getProfile);

module.exports = router;