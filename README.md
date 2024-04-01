
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