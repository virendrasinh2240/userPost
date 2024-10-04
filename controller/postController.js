const Post = require("../models/post")

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body

        const post = new Post({ title, content, auther: req.user._id })
        await post.save()

        res.status(200).json({
            message: "successfully created post",
            post
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "Internal server error" })
    }
}

const getPost = async (req, res) => {
    try {
        const post = await Post.find().populate("auther", "username")
        res.status(200).json({ post })

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "Error fetching Data" })
    }
}
const updatePost = async (req, res) => {
    try {
        const { title, content, auther } = req.body
        const id = req.params

        const updatePost = await Post.findById({id})

         updatePost.title = title,
         updatePost.content =content,
         updatePost.auther = auther

        await updatePost.save()
        res.status(200).json({ message: "successfully update" })
    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" })
    }
}
const deletePost = async (req, res) => {
    try {

        const { id } = req.user
        const post = await Post.findById({ id })
        await post.remove()
        res.status(200).json({ message: "successfully post delete" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" })
    }
}

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost
}