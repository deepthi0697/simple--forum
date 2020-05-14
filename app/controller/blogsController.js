const Blog = require('../model/Blog')

module.exports.list = (req, res) => {
    Blog.find().populate('author',['username'])
        .then((blog) => {
            if(blog){
                res.json(blog)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const blog = new Blog(body)
    blog.save()
        .then((blog) => {
            if(blog){
                res.json(blog)
            }else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Blog.findById(id).populate('author', ['username'])
        .then((blog) => {
            if(blog){
                res.json(blog)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) =>{
    const id = req.params.id
    const body = req.body
    Blog.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((blog) => {
            if(blog){
                res.json(blog)
            }else{
                res.json({})
            }
        })
        .catch((err)=> {
            res.json(err)
        })
}

module.exports.delete = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((blog) => {
            if(blog){
                res.json(blog)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}