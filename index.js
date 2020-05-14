const express = require('express')
const app = express()
const port = process.env.PORT || 3033; 
// const port = 3033
const setupDB = require('./config/setupDB')
const routes = require('./config/routes')
const cors = require('cors')
const path = require('path')

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"client/build"))) 
    app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 
}


setupDB()

app.use(cors())
app.use(express.json())
app.use('/', routes)


app.listen(port, () => {
    console.log('listening on ', port)
})