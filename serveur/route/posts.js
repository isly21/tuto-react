const express = require('express');
// Initialize app

const Post = require('../models/Post');

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
module.exports = router;