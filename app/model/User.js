const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
           validator: function(value){
                return validator.isEmail(value)
           },
           message: function(){
                return 'invalid email format' 
           }
        }
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now()
            }
        }
    ]
})

usersSchema.pre('save', function(next){
    const user = this
    bcryptjs.genSalt(10)
    .then((salt) => {
        bcryptjs.hash(user.password, salt)
            .then((encryptedPass) => {
                user.password = encryptedPass
                next()
            })
            .catch((err) => {
                res.json(err)
            })
    })
    .catch((err) => {
        res.json(err)
    })
})

usersSchema.statics.findByCredentials = function(email, password){
    const User = this
    return User.findOne({email})
        .then((user) => {
            if(!user){
                return Promise.reject('invalid email')
            } else{
                return bcryptjs.compare(password, user.password)
                    .then((result) => {
                        return Promise.resolve(user)
                    })
                    .catch(err => {
                        return Promise.reject(err)
                    })
            }
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

usersSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        _id: user._id,
        name: user.name,
        createdAt: Number(Date.now())
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({token: token})

    return user.save()
        .then((user) => {
            return Promise.resolve(token)
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

usersSchema.statics.findByToken = function(token){
    const User = this
    let tokenData 
    try {
        tokenData = jwt.verify(token, 'jwt@123')
    }
    catch(err){
        return Promise.reject(err)
    }
    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token
    })
        .then((user) => {
            return Promise.resolve(user)
        })
        .catch((err) => {
            return Promise.reject(err)
        })
}

const User = mongoose.model('User', usersSchema)
module.exports = User