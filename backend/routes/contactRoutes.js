const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/',async(req,res)=>{
    try {
        const {name,phone,email,userId} = req.body;
        const contact = await Contact.create({name,phone,email,userId});
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:userId',async(req,res)=>{
    try {
        const contacts = await Contact.find({userId: req.params.userId});
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})
module.exports = router;