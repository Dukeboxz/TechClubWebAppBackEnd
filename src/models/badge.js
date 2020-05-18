const mongoose = require('mongoose'); 

const badgeSchema = new mongoose.Schema({
    name: {
        type: String, 
        trim: true, 
        required: true,
        unique: true
    }, 
    badgeImageUrl:{
        type: String
    },
    badgeCost:{
        type: Number, 
        required: true,
    }
}, {timestamps: true})

const Badge = mongoose.model("Badges", badgeSchema)

module.exports = Badge