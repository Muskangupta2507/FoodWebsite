const express=require('express');
const router=express.Router();   //mini application/instance
const Product=require('../model/Product');
const Review=require('../model/Review');
const Cart=require('../model/Cart');

router.post('/cart/add-to-cart', async(req,res)=>{
    let {id} = req.body;
    console.log(id);
    let addedPro= await Product.findById(id);
    console.log(addedPro);
    Cart.save(addedPro);
    await addedPro.save();
    res.send('Product stored successfully'); 
})
router.post('/cart/delete-cart', async(req,res)=>{
    let {id} = req.body;
    Cart.delete(id);
    res.redirect('/cart'); 
})

module.exports=router;