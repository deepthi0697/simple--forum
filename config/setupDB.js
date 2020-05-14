const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb+srv://deepthi:shaz7022@cluster0-7uxoi.mongodb.net/simpleForum?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true} )
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = setupDB