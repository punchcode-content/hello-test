const express = require("express");
const app = express();
const hello = require("./hello");
const mongoose = require("mongoose");
const Visit = require("./models/visit")
const env = process.env.NODE_ENV || "development";
const config = require("./config.json")[env];

mongoose.connect(config.mongoUrl);

app.get("/hello", function (req, res) {
    Visit.create({url: "/hello", date: new Date()}).then(function () {
        res.send(hello())
    })
})

app.get("/hello/:name", function (req, res) {
    res.send(hello(req.params.name))
})

if (require.main === module) {
    app.listen(3000, function () {
        console.log("Server running at http://localhost:3000")
    })
}

module.exports = app;