const User = require('../model/User')

module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
    .then((user) => {
        if(user){
            res.json(user)
        }
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.login = (req, res) => {
    const body  = req.body
    User.findByCredentials(body.email, body.password)
        .then((user) => {
            return user.generateToken()
        })
        .then((token) => {
            res.setHeader('x-auth', token)
            res.json(token)
        })
        .catch((err) => {
            res.json(err)
        })
}