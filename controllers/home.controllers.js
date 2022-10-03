module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
};

// old
// router.get('/',(req, res) => {
//   db.collection('cats').find().toArray()
//   .then(data => {
//     res.render('index.ejs', { info: data })
//   })
//   .catch(error => console.error(error))
// })