const express = require("express");
const morgan = require("morgan");
const server = express();
const productController = require('./Controller/product')

const mongoose = require('mongoose') ; 
const {Schema} = mongoose ; 

const productRouter = require('./Routes/product') ; 
const { ConnectionPoolClosedEvent } = require("mongodb");

// db connection 

main().catch(err => console.log(err)) ; 

async function main(){
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce') ;
  console.log('database connected') ;  
}



// Middlewares - bodyParser

server.use(express.json());
server.use(morgan("dev"));
server.use(express.static("public"));
server.use('/', productRouter.router)

// api endpoints 




// listening the server on PORT 

server.listen(3000, () => {
  console.log("Server started");
});
