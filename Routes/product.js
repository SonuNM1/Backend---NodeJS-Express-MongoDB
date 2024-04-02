
const express = require('express');
const router = express.Router() ; 

const productController = require('../Controller/product') ; 

// API endpoints 

router.post("/products", productController.createProduct);

router.get("/products", productController.getAllProduct);

router.get("/products/:id", productController.getProduct);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);


exports.router = router ; 