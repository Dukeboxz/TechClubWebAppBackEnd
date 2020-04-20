const express = require('express')
const router = new express.Router(); 

const Member = require('../models/member')

router.post('/member', async (req, res) =>{

   
    const member = new Member(req.body)
    console.log(member)
    try{
        await member.save()

        res.status(201).send(req)
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})


module.exports = router

