const mongoose = require('mongoose');
// const Product = require('./model/Product');

// let products=[
//     {
//         name:"Mastering the Art of Rain Photography",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mmPd9A6SyKPqPrp7Wf9U-teC2haevZfeaQ&usqp=CAU",
//         desc: "Making the best of a rainy day"
//     },{
//         name:"Living Color",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMl4_ScwHun3sWMAmlDsshDOzMCpJIWXsXQ&usqp=CAU",
//         desc: "Have a design"
//     },{
//         name:"I Hear it Likes the girls",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYR-OE5h2M_0wceLIzOJB2S72H-ERugZQpA&usqp=CAU",
//         desc: "Immersive experience"
//     },{
//         name:"Progrraming",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlRnalLvKNKpdmJxQqOYDCml5SoKkcq4g-g&usqp=CAU",
//         desc: "xyz"
//     }
// ]


async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded");
}

module.exports = seedDB;