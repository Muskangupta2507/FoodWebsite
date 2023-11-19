const express = require('express');
const Product = require('../model/Product');
const router = express.Router();

router.get('/home' , async (req,res)=>{
    let allProducts = await Product.find();
    res.render('home' , {allProducts})
    // res.json(allProducts);
});

router.get('/home/menu', async (req,res)=>{
    let allProducts = await Product.find();
    res.render('menu',{allProducts})
});

router.get('/home/about',(req,res)=>{
    res.render('partials/about')
})

router.get('/appointment',(req,res)=>{
    res.render('partials/appointment')
})

router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('show' , {foundProduct})

})

router.get('/home/login',(req,res)=>{
    res.render('login')
});

router.get('/cart',(req,res)=>{
    res.render('cart')
});

module.exports = router;