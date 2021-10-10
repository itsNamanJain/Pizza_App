const mongoose= require("mongoose");
const dotenv = require("dotenv");
const Pizza  = require("./models/pizzaModel");
const AllPizzas = require("./data/pizza-data");
const ConnectDb = require("./config/config");

dotenv.config();

//   Connnection mongodb
ConnectDb(); 

//  Import Data
const ImportData = async()=>{
    try {
        await Pizza.deleteMany();
        const sampleData = AllPizzas.map((pizza)=>{
            return {...pizza}
        })
        await Pizza.insertMany(sampleData);
        console.log("Import Success");
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

const dataDestroy = ()=>{

}
if(process.argv[2] === "-d"){
    dataDestroy();
}
else{
    ImportData();
}