const express = require('express');
const router = new express.Router(); 

const Badge = require('../models/badge')

router.get('/badge', async (req, res)=>{
    try{

        const allBadges = await Badge.find(); 
        res.status(200).send(allBadges)
    }catch(e){

        res.status(400).send(e);
    }
})

router.get('/badge/:name', async (req, res)=>{

    const name = req.params.name
    console.log('In badge name')
    try{

        const badge = await Badge.findOne({name: name})

        if(!badge){
            return res.status(404).send();
        }

        res.send(badge)

    }catch(e){
        res.status(500).send();
    }
})

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

router.delete('/badge/:id', async (req, res)=>{

    console.log('in delete')
    try{

        const badge =  await Badge.findOneAndDelete({_id: req.params.id})

        if(!badge){
            return res.status(404).send();
        }

        res.send(badge)


    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/badge/:id', async (req, res)=>{

        console.log('In badge patch')
    try{
        const updates = Object.keys(req.body)
        console.log(req.params)
        const badge = await Badge.findOne({_id: req.params.id})
        console.log("patch badges")
        console.log(badge);

        updates.forEach((update)=> badge[update] = req.body[update])

        await badge.save(); 

        res.send(badge)

    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }

})

module.exports = router