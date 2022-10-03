// const cloudinary = require("../middleware/cloudinary");
// const Post = require("../models/Post.model");
// const Cluster = require("../models/Cluster.model");
// const Cat = require("../models/Cat.model");

module.exports = {
  getProfile: (req, res) => {
    const active = ['mid','mid','mid','mid','active']
    res.render("profile.ejs", { active });
  },
};
