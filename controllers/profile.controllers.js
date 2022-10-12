// const cloudinary = require("../middleware/cloudinary");
// const Post = require("../models/Post.model");
// const Cluster = require("../models/Cluster.model");
// const Cat = require("../models/Cat.model");

module.exports = {
  getProfile: (req, res) => {
    const active = ['mid', 'mid', 'mid', 'mid', 'active']
    res.render('profile.ejs', { active })
  },
  // getProfile: async (req, res) => {
  //   try {
  //     const posts = await Post.find({ user: req.user.id });
  //     res.render("profile.ejs", { posts: posts, user: req.user });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
}
