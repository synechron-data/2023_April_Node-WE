const http = require('http');
const express = require('express');

let employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

// Creates an Express Application Handler
const app = express();

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get("/data", (req, res) => {
    // const data = employees;
    const data = require('./posts.json');
    res.json(data);
});

// ----------------------------------------------- Hosting Code

var server = http.createServer(app);

server.listen(3000);

function onError(err) {
    console.log(err);
}

function onListening() {
    var address = server.address();
    console.log("Server started on port: ", address.port);
}

server.on('error', onError);
server.on('listening', onListening);