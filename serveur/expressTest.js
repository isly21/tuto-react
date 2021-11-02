const express = require('express');
// Initialize app
const app = express();



// Mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodemongo');
const Post = require('./models/Post');
const db = mongoose.connection;

// Check for DB connection
db.once('open', function(){
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
router.get('/', function (req, res) {
    let posts = Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});


var port = 8080;
// Start server with port 3000
app.listen(port, function(){
    console.log("Server started on localhost :"+port);
});

const posts = require('./route/posts');
app.use('/posts', posts);