const express = require("express");
const morgan = require("morgan");
const server = express();
const productController = require('./Controller/product')

// bodyParser

server.use(express.json());
server.use(morgan("dev"));
server.use(express.static("public"));

// api endpoints 

server.post("/products", productController.createProduct);

server.get("/products", productController.getAllProduct);

server.get("/products/:id", productController.getProduct);

server.put("/products/:id", productController.updateProduct);

server.delete("/products/:id", productController.deleteProduct);


// listening the server on PORT 

server.listen(3000, () => {
  console.log("Server started");
});
