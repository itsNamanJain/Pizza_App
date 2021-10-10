const mongoose = require("mongoose");

const ConnectDb = async ()=>{
    try {
        const url = process.env.MONGO_URI
        const conn = await mongoose.connect(url);
        console.log("Connected to mongo Successfully");
    } catch (error) {
console.log(error.message);
    }
}
module.exports = ConnectDb;