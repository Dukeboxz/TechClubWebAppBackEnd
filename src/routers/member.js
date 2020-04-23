const express = require('express')
const router = new express.Router(); 

const Member = require('../models/member')

router.get('/members', async (req, res)=> {

    try{
        console.log("in /members")
        const all = await Member.find();
        console.log(all);
        res.status(200).send(all);
    
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }

})

router.post('/member', async (req, res) =>{

   
    const member = new Member(req.body)
    console.log(member)
    try{
        await member.save()
        console.log('AFTER SAVE')
        res.status(201).send()
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})


module.exports = router

