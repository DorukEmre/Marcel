// const cloudinary = require("../middleware/cloudinary");
// const Post = require("../models/Post.model");
// const Cluster = require("../models/Cluster.model");
// const Cat = require("../models/Cat.model");

module.exports = {
  getFeed: (req, res) => {
    const active = ['active','mid','mid','mid','mid']
    res.render("feed.ejs", { active });
  },
  // getFeed: async (req, res) => {
  //   try {
  //     const posts = await Post.find().sort({ createdAt: "desc" }).lean(); // .lean() tells Mongoose to skip instantiating a full Mongoose document and just give a JS object
  //     res.render("feed.ejs", { posts: posts });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  // getProfile: async (req, res) => {
  //   try {
  //     const posts = await Post.find({ user: req.user.id });
  //     res.render("profile.ejs", { posts: posts, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
};
