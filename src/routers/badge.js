const express = require('express');
const router = new express.Router(); 

const Badge = require('../models/badge')

router.post('/badge', async (req, res)=>{

    const badge = new Badge(req.body)
    console.log(badge)
    try{

        await badge.save()

        res.status(201).send(req)

    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router