const promBundle = require("express-prom-bundle");

const express = require("express");
const app = express();



const metricsMiddleware = promBundle({includeMethod: true});
app.use(metricsMiddleware);

app.get("/", function (req, res) {
    res.json({ message: 'Hello World 2' })
});

app.get("/hello", function (req, res) {
    res.json({ message: 'Hello World...' })
});


const db = require("./db.js");
app.get("/db", function (req, res) {
    db.getAllEmployee(req, res)
});

module.exports = app;