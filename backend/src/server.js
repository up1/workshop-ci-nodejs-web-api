const promBundle = require("express-prom-bundle");

const express = require("express");
const app = express();

const metricsMiddleware = promBundle({includeMethod: true});
app.use(metricsMiddleware);

app.get("/", function (req, res) {
    res.json({ message: 'Hello World' })
});

app.get("/hello", function (req, res) {
    res.json({ message: 'Hello World...' })
});

module.exports = app;