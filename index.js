const express = require("express");
const morgan = require("morgan");
const server = express();
const productController = require('./Controller/product')

const productRouter = require('./Routes/product') ; 


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
