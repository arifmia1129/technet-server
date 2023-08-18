const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/v1/product", productRoute);

module.exports = app;
