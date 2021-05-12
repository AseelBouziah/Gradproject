const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const { default: finalfinal } = require("./models/finalfinal.module.js");
const { default: user } = require("./models/customer.module.js");

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gradproject'
});
//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected...');
});


const App = express();
App.use(bodyParser.json({ type: '/' }));
// parse requests of content-type: application/json
App.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
App.use(bodyParser.urlencoded({ extended: true }));

// simple route
App.get("/", (req, res) => {
  res.json({ message: "Welcome to oregano grad application." });
});

App.post('/logini/', function (req, res) {
  email = req.body.email;
  password = req.body.password;
  conn.query("SELECT * FROM user WHERE  password= '" + password + "' and email= '" + email + "'", function (err, result, fields) {
    if (err) {
      response = {
        result: "failed",
      };
      return;
    }
    if (result.length > 0) {
      response = {
        result: "in",
      };
    } else {
      response = {
        result: "success",
      };
    }
    res.end(JSON.stringify(response));
  });
});

App.get(/search\/(?:([^\/]+?))\/?$/i, function (req, res) {
  var search = req.params[0]
  var sql = "SELECT * from finalfinal WHERE list_title LIKE '%"+search+"%'"
  conn.query(sql, function (err, result) {
    if (err) res.send(err)
    res.send(result)
  })
})


App.get(/searcha\/(?:([^\/]+?))\/?$/i, function (req, res) {
  var search = req.params[0]
  var sql = "SELECT * from finalfinal WHERE list_Idiv LIKE '%"+search+"%'"
  conn.query(sql, function (err, result) {
    if (err) res.send(err)
    res.send(result)
  })
})

App.get(/searchb\/(?:([^\/]+?))\/?$/i, function (req, res) {
  var search = req.params[0]
  var sql = "SELECT * from finalfinal WHERE list_time1A LIKE '%"+search+"%'"
  conn.query(sql, function (err, result) {
    if (err) res.send(err)
    res.send(result)
  })
})

App.get(/searchc\/(?:([^\/]+?))\/?$/i, function (req, res) {
  var search = req.params[0]
  var sql = "SELECT * from finalfinal WHERE list_countA LIKE '%"+search+"%'"
  conn.query(sql, function (err, result) {
    if (err) res.send(err)
    res.send(result)
  })
})

require("./routes/names.routes.js")(App);

// set port, listen for requests
App.listen(3000, () => {
  console.log("Server is running on port 3000.");
});