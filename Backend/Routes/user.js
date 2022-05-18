const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const textModel = require("../Models/text");
const cors = require("cors");
const userController = require("../Controllers/textuser");

app.use(bodyParser.json([]));
app.use(cors());

app.post("/text", userController.createTexts);
app.get("/text", userController.getAlltexts);

module.exports = app;
