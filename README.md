
#### [[ Chapter1 - Introduction ]] - Completed 30th march

Assignment 1 : If we delete node_modules. How to run our application again successfully ?

Assignment 2 : How to use command line arguments in Node JS. Like node index.js 3 2 - how can I get 3 and 2 to be used in my programs. [ Hint : search for command line arguments in node ]

Assignment 3 : Explore the os module in Node Js from their documentation. What all info you can access from it about your operating system ?

Assignment 4 : Explore about Asynchronous nature of JS as a single threaded language and how it is achieved using Event Loop. Video are given below in related videos sections.

Assignment 5 [Challenge] : Can you run a system command from Node JS javascript file e.g. ls dir commands ? and can you store its output in a text file ?




#### [[ Chapter 2 - Web Server ]] - Completed 1st April


Assignment 1 : Capture the request which goes when you like a post on facebook (using Chrome network). What are the headers ? What is the payload ?

Assignment 2 : In the chapter we developed a server with only URL switch, but you have to make that more efficient by making it check both METHOD (GET,POST) + URL path
So output of a request with GET /demo will be different from POST /demo [ Use POSTMAN for requests]

Assignment 3 [Challenge] : Try and run 2 different server using the same code you have index.js. You will need to use 2 different ports. But can you do it using the same file and changing PORTS dynamically somehow ?

Assignment 4 [Challenge] : You can also send some data to server using /demo?product=123. where product=123 is called query parameters. Can you capture that data and make the product page work according to the ID (123) . [ This we will do in next chapters using express, but you can give it a try ]


#### [[ Chapter 3 - Express ]]


Assignment 1 :

Make above server with API endpoint /demo as shown above :

Try to call this API in your browser http://localhost:8080/demo?name=Youstart - this will return a response of req.query JSON object

Create 3 query parameters name, age, subject with some values. Check the final output of req.query - can you find all data on server side. Can you send it back to client via res object.

2. Send data via Request Params

In this method you can have a URL with url path like /Youstart/express at end it translates in a param string. In param part string each value is separated by /. As you can see that URL only contains value not the key part of data. key part is decided by the endpoint definition at express server

server.get("/demo/:name/:subject",function(req,res){ console.log(req.params) // prints all data in request object res.send(req.query); // send back same data in response object })

So sequence of values matter in this case. As values sent from client are matched with name and subject params of URL later.

Assignment 2 :

Make above server with API endpoint /demo as shown above :

Try to call this API in your browser http://localhost:8080/demo/Youstart/Express - this will return a response of req.params JSON object

Create 3 URL params name, age, subject . Call the URL and check the final output of req.params - can you find all data on server side. Can you send it back to client via res object.

3. Send data via Request Body

Final method of sending data is via body part of request. We can send data directly to body using URL. We have to either use one of these methods

Use a HTML Form and make method value as POST. This will make all name=value pair to go via body of request.

Use special browsers like POSTMAN to change the body directly. (We will see this example in next classes)

server.post("/demo",function(req,res){
    console.log(req.body) // prints all data in request object
    res.send(req.body);  // send back same data in response object
})




#### [[ Chapter 4 - REST API and CRUD ]]


Assignment 1 : Make an API similar to explained above for Quotes take dummy data from same site (dummy json quotes)




#### [[ Chapter 6 - MongoDB ]]


Mongodump and Mongorestore
These utilities comes with community server and can be found in CMD/terminal. They are not the part of Mongo CLI client.

Mongodump command is used to take backup of complete database or some collections
mongodump  --db accounts 
Above command takes backup of database accounts and stores into a directory named dump

Mongorestore command is used to restore database
mongorestore --db accounts dump/accounts
Above command restore your database accounts from backup directory dump

Task : Use these commands on terminal/CMD (not inside mongo client)

Take a backup of database you created in assignment 1.

Restore the backup of database from dump directory.




#### [[ Chapter 7 - MongoDB, Schema, Model & CRUD operations  ]]





Task 1

Connect mongoose to a database named todolist if you don't have a database with this name. Mongoose will create it after you perform any insert operation.

Creata a Schema named taskSchema and model named Task as shown above.

Task 2

You have to create an API Endpoint to type POST named /task. It will create a new task item in database whenever called properly. All 3 fields title, status, date must be mandatory (required). If someone is not passing all fields properly, no database entry should be created.

//request body :

{
    "title" : "task1",
    "status" : true,
    "date" :'2010-05-30"     

}

// response body should return the newly created object.

res.json(task);


Task 3

You have to create an API Endpoint to type GET named /tasks. It will return all task available in collection tasks.

//request is GET so no data in body :


// response body should return the all db objects of collection tasks.

res.json(tasks);


Task 4

You have to create an API Endpoint to type PUT named /task/:id. It will update existing task item in database which has ObjectId set to id you have passed.

//request params will have id in URL path :

{
    "title" : "task-changed",
}

// response body should return the newly updated object.

res.json(task);


Task 5

You have to create an API Endpoint to type DELETE named /task/:id. It will delete existing task item in database which has ObjectId set to id you have passed.

//request params will have id in URL path :

// response body should return the deleted object.

res.json(task);



[[ Assignments ]]
Assignment 1 : Make a Schema for user with userSchema which has these conditions :

firstName is required, maximum length 16 chars
lastName is not required, maximum length 16 chars
age is a Number, minimum value 12, maximum 100
email make a validator of email, as given in mongoose documentation.
address make address a nested data structure which has its own Schema [ AddressSchema ??] [ Hint: check mongoose documentation for sub-documents to do it
Create addressSchema needed in above example as :

pincode : Number, required
street : String, required
phone: String, length=10
Now try to create this user object and save it to database.

What happens to addresses ? How address document is stored ? check if it creates a new collection in database
What happens if you don't provide validated data in any field. [Note: Throw proper errors strings ]
