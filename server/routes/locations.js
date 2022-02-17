const express = require("express");
require("dotenv").config({ path: "./config.env" });
const apiKey = process.env.API_KEY || "";
const axios = require('axios');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;






// This section will help you get a list of all the locations.
recordRoutes.route("/locations").get(function (req, res) {

  let db_connect = dbo.getDb("weatherApp");
  db_connect
    .collection("locations")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// save a location
recordRoutes.route("/saveLocation").post(function (req, res) {
   let db_connect = dbo.getDb("weatherApp");
    let location = req.body.params.locataion; 
    console.log(location)
    db_connect.collection("locations").insertOne(location, function (err, res) {
    if (err) throw err;
  });
});

module.exports = recordRoutes;