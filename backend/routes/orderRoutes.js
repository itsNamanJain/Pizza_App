const express = require("express");
const router = express.Router()
const {v4:uuidv4} = require('uuid')
const stripe = require('stripe')('sk_test_51JixCWSIlYuLp39Rc1mv98nGoArpWpkClwqz9e2DWuE9tJuubSZ6Ap7AtIHQ5uApBwA5o6Zhk9ghsRrOsWauijDU00EY1Fxaz0');
const Order = require('../models/orderModel')

router.post('/placeorder',async(req, res)=>{
    const {token,subTotal,currentUser,cartItems} = req.body
    try {
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        });
        const payment = await stripe.charges.create({
            amount:subTotal*100,
            currency:"inr",
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey:uuidv4()
        })
        if(payment){
           const newOrder = new Order({
               name:currentUser.name,
               email:currentUser.email,
               userid:currentUser._id,
               orderItems:cartItems,
               orderAmount:subTotal,
               shippingAddress:{
                   street:token.card.address_line1,
                   city:token.card.address_city,
                   country:token.card.address_country,
                   pincode:token.card.address_zip
               },
               transactionId :payment.source.id
           })
           newOrder.save();
        }
        else{
            res.send("Payment Failed")
        } 
    } catch (error) {
        res.json({message:error});
    }
})

router.post('/getUserorder',async(req, res)=>{
    const {userid} = req.body
    try {
        const orders = await Order.find({userid}).sort({_id:'-1'});
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).json({message:error});
    }
})


module.exports = router;