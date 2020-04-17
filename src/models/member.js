const mongoose = require('mongoose')
const validator = require('validator')

const Badge = require('./badge')

const memberScheme = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    }, 
    email:{
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    }, 
    password: {
        type: String, 
        required: true, 
        trim: true, 
        minlength: 5, 
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password not valid')
            }
        },
    },
    avatarImageUrl:{
        type: String, 

    }, 
    badges: [{
       type: Badge 
    }],
    coins: {
        type: Number,
        validate(value){
            if( value < 0 ){
                throw new Error('Coins cannot be negative')
            }
        }
    },
    isAdmin: {
        type: Boolean, 
        default: false
    }
    
})