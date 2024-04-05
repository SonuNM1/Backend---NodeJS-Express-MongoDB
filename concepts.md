Chapter 6 - Mongoose Schema Model and CRUD operations 



mongoose nodejs (object modelling for nodejs)

connection mongodb database and collection with nodejs 

Schema 

type for designing image schema 

Model - why singular  

relation between schema and model 

req.body 

MongoDB NodeJS CRUD with validation 





CRUD API and mongoose methods 



CREATE :

1. create product - use **POST ** HTTP Method

   const product = new Product();
   await product.save()


READ :

1. read all products - use GET HTTP Method

const  products  =  await  Product.find();
const  products  =  await  Product.find({price:{$gt:500}});

2. read 1 product - use GET HTTP Method
const  product  =  await  Product.findById(id);



UPDATE :


1. replace product fields (all fields) - use PUT HTTP Method

const  doc  =  await  Product.findOneAndReplace({_id:id},req.body,{new:true})

2. update only some product fields - use 
PATCH HTTP Method

const  doc  =  await  Product.findOneAndUpdate({_id:id},req.body,{new:true})



DELETE :

1. delete 1 product - use DELETE HTTP Method


const  doc  =  await  Product.findOneAndDelete({_id:id})


