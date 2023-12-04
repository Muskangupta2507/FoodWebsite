const express = require('express');
const app=express();
const Product = require('../model/Product');
const Review = require('../model/Review');
const router = express.Router();
const Cart = require('../model/Cart')
const currUser=require('../model/loggedin')

router.get('/' , async (req,res)=>{
    res.render('start');
});

router.get('/home' , async (req,res)=>{
    let allProducts = await Product.find();
    let user=currUser.user();
    res.render('home' , {user})
    // res.json(allProducts);
});

router.get('/home/menu', async (req,res)=>{
    let allProducts = await Product.find();
    let user=currUser.user();
    res.render('menu',{allProducts,user})
});

router.get('/home/about',(req,res)=>{
    let user=currUser.user();
    res.render('partials/about', {user})
})
 
router.get('/appointment',(req,res)=>{
    let user=currUser.user();
    res.render('partials/appointment', {user})
})

router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('reviews');
    let user=currUser.user();
    res.render('show' , {foundProduct,user})

});

router.get('/cart',(req,res)=>{
    let user=currUser.user();
    res.render('cart',{cart:Cart.getCart(),user})
});

module.exports = router;