const express = require("express")
const router = express.Router()
const {createPost,  getPost  , updatePost , deletePost} = require("../controller/postController")
const authenticate = require("../middleware/authMiddleware")

router.post("/createPost",authenticate,createPost)
router.post("/getPost",authenticate,getPost)
router.post("/updatePost",authenticate,updatePost)
router.post("/deletePost",authenticate,deletePost)

module.exports = router