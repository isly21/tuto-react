const express = require('express');
// Initialize app

//const Customer = require('../models/Customer');
const User = require('../models/User');

const router = express.Router();
router.get('/', function (req, res) {
    let posts = Customer.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});
module.exports = router;