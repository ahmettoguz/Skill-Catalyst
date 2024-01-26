// express import
const express = require("express");
const app = express();

// database configurations
const Mongo = require("../database/mongo/Mongo");
Mongo.connectDatabase();

// external middleware configurations
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

// router configurations
const route = require("../router/root/route");
route(app);

module.exports = app;
