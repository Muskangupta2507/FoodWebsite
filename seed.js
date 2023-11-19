const mongoose = require('mongoose');
const Product = require('./model/Product');

let products=[
    {
        name:"Crispy Veggie",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Grilled-courgette-halloumi-salad-with-caper-lemon-dressing-1f72685.jpg?resize=500,300",
        desc: "Spicy, sizzeled and baked, not fried",
        price:200,
        type:"Dinner"
    },{
        name:"Macaroni",
        img: "https://sugarspunrun.com/wp-content/uploads/2018/05/Easy-Macaroni-Salad-Recipe-1-of-1-15-1.jpg?resize=300,300",
        desc: "Veggie, cheesy and yumm",
        price:200,
        type:"Snacks"
    },{
        name:"Cucumber Salad",
        img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/05/Cucumber-Salad-main-1.jpg?resize=500,300",
        desc: "Seasoned, salted and healthy",
        price:200,
        type:"Brunch"
    },{
        name:"Veggie Salad",
        img: "https://www.themediterraneandish.com/wp-content/uploads/2023/04/Mediterranean-Salad_8.jpg?resize=300,500",
        desc: "Refreshing, tangy and alive",
        price:200,
        type:"Breakfast"
    }
]


async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded");
}

module.exports = seedDB;