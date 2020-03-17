var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));

mongoose.connect('mongodb://localhost:27017/freelance');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})


router.post('/PostJob', function (req, res) {
    var name = req.body.title;
    var details = req.body.details;
    // var pass = req.body.password;
    // var phone = req.body.phone;

    var data = {
        "name": name,
        "details": details
        // "password": pass,
        // "phone": phone
    }

    if (req.body.radio == "val2") {
        db.collection('jobs').insertOne(data, function (err, collection) {
            if (err) throw err;
            console.log("Record inserted Successfully");
        });
    }

    if (req.body.radio == "val1") {
        db.collection('projects').insertOne(data, function (err, collection) {
            if (err) throw err;
            console.log("Record inserted Successfully");
        });
    }

    return res.redirect('src/App.js');
})


// app.get('/', function (req, res) {
//     res.set({
//         'Access-control-Allow-Origin': '*'
//     });
//     return res.redirect('src/App.js');
// }).listen(3000);

// console.log("server listening at port 3000");

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));