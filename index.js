const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const morgan = require("morgan");

const products = data.products;

const express = require("express");
const server = express();

server.use(express.json());

server.use(morgan("dev"));

server.use(express.static("public"));


// api endpoints 

server.post("/products", createProduct);

server.get("/products", getAllProduct);

server.get("/products/:id", getProduct);

server.put("/products/:id", updateProduct);

server.delete("/products/:id", deleteProduct);




const createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  }

const getAllProduct = (req, res) => {  
  res.json(products) ; 
}

const getProduct = (req, res) => {
    const id = +req.params.id; // conver to number
    const product = products.find((p) => p.id === id);
  
    res.json(product);
  }

const updateProduct = (req, res) => {
    const id = +req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  }

const deleteProduct = (req, res) => {
    const id = +req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  }

server.listen(3000, () => {
  console.log("Server started");
});
