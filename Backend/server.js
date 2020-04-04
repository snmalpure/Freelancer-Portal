const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const freelanceRoutes = express.Router();
const PORT = 4000;
const mongoose = require('mongoose');
const passport = require("passport");
const users = require("./routes/api/users");
let freelance_proj = require('./freelance_proj.model');
let freelance_job = require('./freelance_job.model');

app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/freelance_db', { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB connection established successfully !");
});
connection.once('error', console.log.bind(console, "connection error"));

freelanceRoutes.route('/add_proj').post(function (req, res) {
    let proj = new freelance_proj(req.body);
    proj.save()
        .then(todo => {
            res.status(200).json({ 'proj': 'proj added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding proj failed');
        });
});

freelanceRoutes.route('/add_job').post(function (req, res) {
    let job = new freelance_job(req.body);
    job.save()
        .then(todo => {
            res.status(200).json({ 'job': 'job added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding job failed');
        });
});

freelanceRoutes.route('/jobs').get(function (req, res) {
    freelance_job.find(function (err, jobs) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(jobs);
        }
    });
});

freelanceRoutes.route('/projects').get(function (req, res) {
    freelance_proj.find(function (err, projects) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(projects);
        }
    });
});

app.use('/freelance_db', freelanceRoutes);
app.use(passport.initialize());// Passport config
require("./config/passport")(passport);// Routes
app.use("/api/users", users);

app.listen(PORT, function () {
    console.log("Server is running on port " + PORT)
});