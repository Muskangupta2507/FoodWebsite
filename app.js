const mongoose = require('mongoose');
const db = require('./config/key').MongoURI;
const path = require('path');
const express = require('express');
const seedDB = require('./seed');
const app= express();
const productRoutes= require('./routes/productRoutes');
const reviewRoutes= require('./routes/reviewRoutes');
const cartRoutes= require('./routes/cartRoutes')
const authRoutes=require('./routes/authRoutes')
const methodOverride = require('method-override');
const User= require('./model/User')
const passport=require('passport')
const LocalStrategy=require('passport-local')
const session=require('express-session')

// seedDB() 
mongoose.connect(db)
.then(() => console.log('MongoDB Atlas connected...'))
.catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));
app.use('/',express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

passport.use(new LocalStrategy(User.authenticate()));

let configsession={
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized:true
}
app.use(session(configsession))
app.use(passport.initialize());
app.use(passport.session()); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(productRoutes);
app.use(reviewRoutes);
app.use(cartRoutes);
app.use(authRoutes);

app.listen(8080, ()=>{
    console.log(`Server connected at port 8080`)
});
