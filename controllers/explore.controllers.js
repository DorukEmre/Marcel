// const Post = require("../models/Post.model");
// const Cluster = require("../models/Cluster.model");
// const Cat = require("../models/Cat.model");

module.exports = {
  getExplore: (req, res) => {
    const active = ['mid','active','mid','mid','mid']
    res.render("explore.ejs", { active });
  },
};
