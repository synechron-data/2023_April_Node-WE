const express = require('express');
const logger = require('morgan');
const favicon = require('serve-favicon');

const indexRouter = require('./routes/index');
const employeesRouter = require('./routes/employees');

const app = express();

app.set("view engine", "pug");

app.use(logger('dev'));
app.use(favicon(__dirname + "/public/images/favicon.png"));

app.use("/", indexRouter);
app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
    console.log("Error Handler");
    res.status(500).send("Server Error");
});

module.exports = app;