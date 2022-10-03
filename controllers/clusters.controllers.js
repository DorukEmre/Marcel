// const Cluster = require("../models/Cluster.model");

module.exports = {
  getClusters: (req, res) => {
    const active = ['mid','mid','mid','active','mid']
    res.render("clusters.ejs", { active });
  },
};
