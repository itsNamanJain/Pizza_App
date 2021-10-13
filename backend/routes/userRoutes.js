const express = require("express");
const router = express.Router()
const User = require('../models/userModel');

router.post('/register',(req, res)=>{
    const {name,email,password}=req.body;
    const newUser = new User({name,email,password})   
    try {
       newUser.save();
       res.status(200).json({
        success:true,
        message:"User Registered SuccessFully"
    });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error
        });
    }
})

router.post('/login',async(req, res)=>{
    const {email,password}=req.body;
    const user = await User.find({email,password})
    try {
      if(user.length>0){
          const currentUser = {
              name:user[0].name,
              email:user[0].email,
              _id:user[0]._id,
              isAdmin:user[0].isAdmin
          }
          res.status(200).send(currentUser);
      }
      else{
          res.status(400).json({
              message:"Login Failed"
          })
      }
    } catch (error) {
        res.status(400).json({
            message:error
        });
    }
})

router.get('/getallusers',async(req,res)=>{
    try {
        const users = await User.find({});
        res.status(200).send(users);   
    } catch (error) {
        res.status(400).json({
            message:error
        });
    }
})

router.post('/deleteuser',async(req, res)=>{
    const userId = req.body.userId
    try {
        await User.findOneAndDelete({_id:userId})
        res.status(200).send("User Delete Success")
        
    } catch (error) {
        res.json({message:error});
    }
})

module.exports = router;