const http = require('http');
const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');

let employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

const app = express();

app.set("view engine", "pug");

// app.use((req, res, next) => {
//     console.log("Request - Middleware One");
//     next();
//     console.log("Response - Middleware One");
// });

// app.use((req, res, next) => {
//     console.log("Request - Middleware Two");
//     next();
//     console.log("Response - Middleware Two");
// });

// app.use((req, res, next) => {
//     var stTime = new Date().getTime();
//     next();
//     var enTime = new Date().getTime();
//     var tTime = enTime - stTime;
//     console.log(`${req.url} - Total Time ${tTime} ms`);
// });

app.use(logger('dev'));
app.use(favicon(__dirname + "/public/images/favicon.png"));

app.get("/", (req, res) => {
    // throw new Error("Just for Check");
    console.log("Get Request Handler - Index");
    res.render("index", { pageTitle: "Index View" });
});

app.get("/employees", (req, res) => {
    console.log("Get Request Handler - Employees");
    res.render("employees", { pageTitle: "Employees View", empList: employees });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log("Error Handler");
    res.status(500).send("Server Error");
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