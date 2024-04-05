
const fs = require("fs");

const model = require('../Models/product')

const Product = model.Product ; 

// const index = fs.readFileSync("index.html", "utf-8");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

const products = data.products;

exports.createProduct = (req, res) => {
    const product = new Product(req.body) ; 
    // product.title = 'PhoneX' ; 
    // product.price = 999 ; 
    // product.rating = 5 ; 
    // product.save((err,doc)=>{
    //   console.log({err, doc});
    // })
    res.status(201).json(req.body);
  }

exports.getAllProduct = async (req, res) => {  
  const products = await Product.find() ; 
  // const products = await Product.find({price:{$gt:500}}) ; 
  res.json(products) ; 
}

exports.getProduct = async (req, res) => {
    const id = req.params.id; // conver to number
    const product = await Product.findById(id) ; 
    res.json(product);
  }

exports.updateProduct = (req, res) => {
    const id = req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  }

exports.deleteProduct = (req, res) => {
    const id = req.params.id; // conver to number
    const productIndex = products.findIndex((p) => p.id === id);
    products.splice(productIndex, 1, {...req.body, id:id}) ; 
    res.status(201).json();
  }