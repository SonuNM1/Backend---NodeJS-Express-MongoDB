
const fs = require('fs') ; 

const index = fs.readFileSync('index.html', 'utf-8') ; 
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8')) ; 

const morgan = require('morgan') ; 

const products = data.product 

// Express Server

const express = require('express')

const server = express()

const date = new Date().toLocaleString() ; 

// Application level middleware 

server.use(express.json()) ; 

// server.use(express.urlencoded())

server.use(morgan('dev'))

server.use(express.static('public')) ; 

// server.use((req, res, next)=>{
//     console.log(req.method, req.ip, req.hostname , req.baseUrl , req.get('User-Agent'), date ) ; 
//     next() ; 
// })


const auth = (req, res, next)=>{
    // console.log(req.query) ; 
    // if(req.body.password === '123' ){
    //     next() ;
    // }else{
    //     res.sendStatus(401) ; 
    // } 
    next() ; 
}

// server.use(auth) ; 

// API - Endpoint - Route

server.get('/:id', auth, (req, res)=>{
    console.log(req.params) ; 
    res.json({type:'GET'}) ; 
})

server.post('/', auth , (req, res)=>{
    res.json({type:'POST'}) ; 
})

server.put('/', (req, res)=>{
    res.json({type:'PUT'}) ; 
})

server.patch('/', (req, res)=>{
    res.json({type:'PATCH'}) ; 
})

server.delete('/', (req, res)=>{
    res.json({type:'DELETE'}) ; 
})






server.get('/demo', (req, res)=>{
    // res.sendStatus(404) ; 
    // res.json(data)
    // res.sendFile("C:\Users\HP\OneDrive\Desktop\Placement Do's\Backend\Backend - NodeJS, Express, MongoDB\index.html") ; 
    res.status(201).send('hello') ; 
})







server.listen(3000, ()=>{
    console.log('Server started') ; 
})



