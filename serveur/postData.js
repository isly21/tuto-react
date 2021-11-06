const express = require('express')

const mongoose = require('mongoose')

var cors = require('cors');

mongoose.Promise = global.Promise;

var app = express()
var port = 8080
mongoose.connect('mongodb://localhost/nodemongo');

const User = require('./models/User');

var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

router = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/post.html");
});

//app.options('/addname', cors())

app.post('/create',(req, res, next) => {
    User.create(req.body, (error, data) => {
        res.set('Access-Control-Allow-Origin', '*');
        console.log("data : "+req.body.nom)
        if (error) {
            return next(error)
        } else {
            console.log("data : "+data)
            res.json(data)
        }
    })
});

app.post("/addname", cors(),(req, res) => {


    res.set('Access-Control-Allow-Origin', '*');


    var myData = new User(req.body);
    console.log("mydata : "+myData.nom);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    //res.status(400).send("unable to save to database");
    });
   });


//app.options("*", cors({ origin: 'http://localhost:8000', optionsSuccessStatus: 200 }));

//app.use(cors({ origin: "http://localhost:8080", optionsSuccessStatus: 200 }));

app.listen(port, () => {
 console.log("Server listening on port " + port);
});

console.log("ok");