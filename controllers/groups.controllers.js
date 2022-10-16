// const Group = require("../models/Group.model");

module.exports = {
  getGroups: (req, res) => {
    const active = ['mid', 'mid', 'mid', 'active', 'mid']
    res.render('groups.ejs', { active })
  },
}
