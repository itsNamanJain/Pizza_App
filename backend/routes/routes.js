const express = require("express");
const router = express.Router()
const pizzaModel = require('../models/pizzaModel');

router.get('/getPizzas',async(req, res)=>{
    try {
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
    } catch (error) {
        res.json({message:error});
    }
})

router.post('/addpizza',async(req, res)=>{
    const {pizza} = req.body;
    try {
        
        const newPizza = new pizzaModel({
            name:pizza.name,
            image:pizza.image,
            varients:['small','medium','large'],
            description:pizza.description,
            category:pizza.category,
            prices:[pizza.prices]
        })
        await newPizza.save();
        res.status(200).send("New Pizza Added")
    } catch (error) {
        res.json({message:error});
    }
})

router.post('/getpizzabyid',async(req, res)=>{
    const pizzaId = req.body.pizzaId
    try {
        const pizza = await pizzaModel.findOne({_id:pizzaId});
        res.send(pizza);
    } catch (error) {
        res.json({message:error});
    }
})

router.post('/updatepizza',async(req, res)=>{
    const updatedPizza = req.body.updatedPizza
    try {
        const pizza = await pizzaModel.findOne({_id:updatedPizza._id});
        pizza.name = updatedPizza.name;
        pizza.description = updatedPizza.description;
        pizza.image = updatedPizza.image;
        pizza.prices = [updatedPizza.prices];
        pizza.category = updatedPizza.category;
        await pizza.save();
        res.status(200).send("Pizza Update Success")
        
    } catch (error) {
        res.json({message:error});
    }
})

router.post('/deletepizza',async(req, res)=>{
    const pizzaId = req.body.pizzaId
    try {
        await pizzaModel.findOneAndDelete({_id:pizzaId})
       
        res.status(200).send("Pizza Delete Success")
        
    } catch (error) {
        res.json({message:error});
    }
})

module.exports = router;