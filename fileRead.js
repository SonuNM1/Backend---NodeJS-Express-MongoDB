// console.log('hello')

// import {sum} from './lib.js'

const fs = require('fs')

const lib = require('./lib.js')


// asynchronous file read 

const startTime = performance.now()

const asynctxt = fs.readFile('demo.txt', 'utf-8', (err, text)=>{
    console.log(text) ; 
})

const endTime = performance.now() ; 

console.log(`async time: ${endTime-startTime}`);

// synchronous file read 

const t1 = performance.now() ; 

const synctxt = fs.readFileSync('demo.txt', 'utf-8')

console.log(synctxt) ;

const t2 = performance.now() ; 

console.log(`sync time: ${t2-t1}`)




/*
const bufferText = fs.readFileSync('demo.txt') ; 

const text = bufferText.toString()

console.log(text) ; 
*/



// console.log(lib.sum(3,4)) ; 