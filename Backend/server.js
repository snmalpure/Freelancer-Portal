var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/freelance');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var app = express()


app.use(bodyParser.json());
app.use(express.static(__dirname));
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/PostJob', function (req, res) {
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


app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('src/App.js');
}).listen(3000);

console.log("server listening at port 3000");