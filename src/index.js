const express = require('express')
require('./db/mongoose')

const app = express()

//app.use(express.json)

app.get('', (req, res) =>{

    res.send("Express seems to be working with double quotes")
})

app.listen(3000, () => {

    console.log("server is running on port: 3000" )
})