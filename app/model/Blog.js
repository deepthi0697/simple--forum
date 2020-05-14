const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogsSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    likes: {
        type: Number,
        default: 0,
        required: true
    }
})

const Blog = mongoose.model('Blog', blogsSchema)
module.exports = Blog