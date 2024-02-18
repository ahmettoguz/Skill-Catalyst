// express import
const express = require("express");
const app = express();

// configure dotenv middleware
const dotenv = require("dotenv");
dotenv.config();

// import env variables
const EnvUtility = require("../utility/EnvUtility");

// database configurations
const Mongo = require("../database/mongo/Mongo");
Mongo.connectDatabase();

// external middleware configurations
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

// internal middleware configurations
if (EnvUtility.isLoggingActive === "true") {
  const ExpressUtility = require("../utility/ExpressUtility");
  app.use(ExpressUtility.displayRequestInfo);
}

// router configurations
const route = require("../router/root/route");
route(app);

module.exports = app;
