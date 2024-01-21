const express = require("express");
const app = express();

// middleware imports
const bodyParser = require("body-parser");
const cors = require("cors");

// middleware configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// router import
const router = require("../router/router");

// router configuration
app.use("/health-check", router.healthCheck);
app.use("/auth", router.auth);

module.exports = app;
