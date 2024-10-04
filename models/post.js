const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    constent: {
        type: String,
        required: true
    },
    auther:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"  
    },
    createdAt:{
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model("Post",postSchema)