const express=require('express');
const router=express.Router();   //mini application/instance
const Product=require('../model/Product');
const Review=require('../model/Review');

router.post('/products/:id/review', async(req,res)=>{
    let {id}=req.params;
    let {rating,comment}=req.body;
    let review=new Review({rating,comment});
    let product=await Product.findById(id);
    
    product.reviews.push(review);
    await product.save();
    await review.save();
    res.send('review stored successfully')
})

module.exports=router;