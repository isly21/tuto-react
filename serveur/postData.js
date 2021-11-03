const express = require('express')

const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

var app = express()
var port = 8080
mongoose.connect('mongodb://localhost/nodemongo');

const User = require('./models/User');

var bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/post.html");
});


app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

console.log("ok");