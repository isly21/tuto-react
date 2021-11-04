const express = require('express');
// Initialize app
const app = express();
var cors = require('cors');

// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemongo');
//mongoose.connect('mongodb://localhost/mydb');
const Post = require('./models/Post');
//const User = require('./models/User');
const db = mongoose.connection;

// Check for DB connection
db.once('open', function() {
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});

// Route for home
app.get('/', function (req, res) {
    res.send('hello world');
});


// Initialize app
const router = express.Router();

var port = 8081;
// Start server with port 3000


const posts = require('./route/posts');
const users = require('./route/users');

const { createProxyMiddleware } = require('http-proxy-middleware');


app.get('/posts', (req, res) => {

    
    
    res.set('Access-Control-Allow-Origin', '*');
    //res.send({ "msg": "This has CORS enabled 🎈" })
    let posts = Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
    })

app.options("*", cors({ origin: 'http://localhost:8000', optionsSuccessStatus: 200 }));

app.use(cors({ origin: "http://localhost:8080", optionsSuccessStatus: 200 }));
//app.use('/posts', posts);

app.listen(port, function(){
    console.log("Server started on localhost :"+port);
});