const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const postsController = require('../controllers/posts.controllers')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

// POST new cat pictures, upload and checks through Multer 'upload.single("file")'
router.post('/createPost', upload.single('file'), postsController.createPost)

router.put('/likePost/:id', postsController.likePost)

module.exports = router
