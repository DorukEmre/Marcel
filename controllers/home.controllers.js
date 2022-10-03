module.exports = {
  getIndex: (req, res) => {
    const active = ['mid','mid','mid','mid','mid']    
    res.render("index.ejs", { active });
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