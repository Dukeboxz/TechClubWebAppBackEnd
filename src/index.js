const express = require('express')
require('./db/mongoose')
const bodyParser = require('body-parser')
const memberRouter = require('./routers/member')
const badgeRouter = require('./routers/badge')

const app = express()

app.use(function(req, res, next){
    console.log('In app use')
    res.header("Access-Control-Allow-Origin", "*" );
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.use(bodyParser.json())

app.use(memberRouter);
app.use(badgeRouter);





app.listen(3000, () => {

    console.log("server is running on port: 3000" )
})
