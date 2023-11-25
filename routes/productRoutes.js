const express = require('express');
const app=express();
const Product = require('../model/Product');
const LogInCollection = require("../model/Login")
const Review = require('../model/Review');
const router = express.Router();
// const start=require('../views/start');

router.get('/' , async (req,res)=>{
    res.render('start');
});

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
    let foundProduct = await Product.findById(id).populate('reviews');
    res.render('show' , {foundProduct})

})

router.get('/login',(req,res)=>{
    res.render('login')
});

router.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})



// app.get('/home', (req, res) => {
//     res.render('home')
// })

router.post('/signup', async (req, res) => {
    
    const data = new LogInCollection({
        name: req.body.name,
        password: req.body.password
    })
    await data.save()

    // const data = {
    //     name: req.body.name,
    //     password: req.body.password
    // }

    const checking = await LogInCollection.findOne({ name: req.body.name })

   try{
    if (checking.name === req.body.name && checking.password===req.body.password) {
        res.send("user details already exists")
    }
    else{
        await LogInCollection.insertMany([data])
    }
   }
   catch{
    res.send("wrong inputs")
   }

    res.status(201).render("home", {
        naming: req.body.name
    })
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home", { naming: `${req.body.password}+${req.body.name}` })
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})

router.get('/cart',(req,res)=>{
    res.render('cart')
});

module.exports = router;