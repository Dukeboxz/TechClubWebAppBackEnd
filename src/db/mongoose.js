const mongoose = require('mongoose')

const connectionUrl = 'mongodb://127.0.0.1:27017/tech-club'


mongoose.connect(connectionUrl, {
    useNewUrlParser:true,
    useCreateIndex: true, 
    
})