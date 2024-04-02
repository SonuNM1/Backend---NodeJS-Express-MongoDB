
const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const products = data.products;

exports.createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  }

exports.getAllProduct = (req, res) => {  
  res.json(products) ; 
}

exports.getProduct = (req, res) => {
    const id = +req.params.id; // conver to number
    const product = products.find((p) => p.id === id);
  
    res.json(product);
  }

exports.updateProduct = (req, res) => {
    const id = +req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  }

exports.deleteProduct = (req, res) => {
    const id = +req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  }