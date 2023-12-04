const express=require('express');
const router=express.Router();   //mini application/instance
const User=require('../model/User');
const passport=require('passport')
const currUser=require('../model/loggedin')

router.get('/register',(req,res)=>{
    res.render('signup')
})

router.post('/register',async (req,res)=>{
    let {username,email,password}=req.body;
 
    let newuser=new User({username,email});
    let tt=await User.register(newuser,password);
    currUser.new(newuser)
    res.send(tt); 
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.post('/login',passport.authenticate('local',
{
    failureRedirect:"/login" 
}),
function(req,res){
    currUser.new(req.user)
    let user=currUser.user();
    console.log(user,'currUser')
    res.render("home",{user})
}
);

module.exports=router;