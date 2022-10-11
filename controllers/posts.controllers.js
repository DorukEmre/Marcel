const cloudinary = require('../middleware/cloudinary')
const Post = require('../models/Post.model')
// const Cluster = require("../models/Cluster.model");
// const Cat = require("../models/Cat.model");

module.exports = {
  getFeed: async (req, res) => {
    try {
      const active = ['active', 'mid', 'mid', 'mid', 'mid']
      const posts = await Post.find().sort({ createdAt: 'desc' }).lean() // .lean() tells Mongoose to skip instantiating a full Mongoose document and just give a JS object
      res.render('feed.ejs', { posts, active })
    } catch (err) {
      console.log(err)
    }
  },
  getSpot: (req, res) => {
    const active = ['mid', 'mid', 'active', 'mid', 'mid']
    res.render('spot.ejs', { active })
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path)

      await Post.create({
        catName: req.body.catName,
        // image: [
        //   {
        //     url: result.secure_url,
        //     cloudinaryId: result.public_id,
        //     // GPS: ,
        //   },
        // ],
        imageUrl: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.comment,
        user: req.user.id,
      })
      console.log('Post has been added!')
      res.redirect('/feed')
    } catch (err) {
      console.log(err)
    }
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
}
