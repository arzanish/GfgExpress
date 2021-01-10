const { json } = require("express");
const express = require("express");
const app = express.Router();
app.get("/", (req, res) => {
  res.json("Hey there Geeks !");
});
module.exports = app;
