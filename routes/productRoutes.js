const express = require('express');
const Product = require('../model/Product');
const router = express.Router();

router.get('/' , async (req,res)=>{
    let allProducts = await Product.find();
    res.render('home' , {allProducts})
})

module.exports = router;