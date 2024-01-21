const express = require("express");
const app = express();

// middleware imports
const bodyParser = require("body-parser");
const cors = require("cors");

// router imports
const productRoutes = require("../routes/products");
const orderRoutes = require("../routes/orders");
const loginRoutes = require("../routes/login");

// middleware configurations
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// router configurations
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/login", loginRoutes);

module.exports = app;
