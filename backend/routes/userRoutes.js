const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/',async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        const user = await User.create({username,email,password});
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});
module.exports = router;