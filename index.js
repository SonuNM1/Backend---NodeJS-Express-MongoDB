const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const morgan = require("morgan");

const products = data.products;

// Express Server

const express = require("express");

const server = express();

const date = new Date().toLocaleString();

// Application level middleware

server.use(express.json());

// server.use(express.urlencoded())

server.use(morgan("dev"));

server.use(express.static("public"));

// API - Endpoint - Route

// API ROOT, base URL,


// Create POST /products

server.post("/products", (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  });

// Read GET /produts

server.get("/products", (req, res) => {

  /*const firstDescription = products[0].description;
  res.json(firstDescription);

  const descriptions = products.map((product) => {
    return product.description;
  });
  res.json(descriptions);*/

// console.log(products) ;   

res.json(products) ; 
});

// READ GET /products/:id

server.get("/products/:id", (req, res) => {
  const id = +req.params.id; // conver to number
  const product = products.find((p) => p.id === id);

  res.json(product);
});


// Update PUT /products/:id

server.put("/products/:id", (req, res) => {
    const id = +req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  });

// Update PATCH /products/:id 

// server.patch("/products/:id", (req, res) => {
//     const id = +req.params.id; // conver to number
//     const productIndex = products.findIndex((p) => p.id === id);
//     products.splice(productIndex, 1, {...req.body, id:id}) ; 
//     res.status(201).json();
//   });


// Delete DELETE /products/:id

server.delete("/products/:id", (req, res) => {
    const id = +req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  });


server.listen(3000, () => {
  console.log("Server started");
});
