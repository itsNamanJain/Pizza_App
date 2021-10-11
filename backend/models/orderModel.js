const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Order Name is Required']
    },
    email:{
        type:String,
        required:[true,"Email is Reuired"]
    },
    userid:{
        type:String,
        required:true
    },
    orderItems:[],
    shippingAddress :{
        type:Object,
        // required:true
    },
    
    orderAmount:{
        type:String,
        required:true
    },
    isDelivered:{
        type:Boolean,
        default:false
    },
    transactionId:{
        type:String,
        // required:true    
    }
},{timestamps:true})

module.exports = mongoose.model('Order',orderSchema);