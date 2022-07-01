const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
//const multer = require("multer");
const { dirname } = require("path");

// server config
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server listening");
});
app.get("/", (req, res, next) => {
  res.sendFile(dirname + "/public/index.html");
});
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
