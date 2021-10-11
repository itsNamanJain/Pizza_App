const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const ConnectDb = require("./config/config")
const dotenv = require("dotenv");
const colors = require('colors');

//  config dotenv
dotenv.config();

//   Connnection mongodb
ConnectDb(); 

const app=express();
//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/pizzas",require('./routes/routes'));
app.use("/api/users",require('./routes/userRoutes'));
app.use("/api/orders",require('./routes/orderRoutes'));

app.get('/',(req,res)=>{
    res.send("<h1>Hello Node Server</h1>")
})

app.listen(8000,()=>{
    console.log("Server runnig at port 8000");
})