"use strict";

const express = require("express");
const app = express();

const path = require("path");

// Set up static directory for files in /pub using Express middleware
app.use(express.static(path.join(__dirname, "/pub")));

// Use environment variable process.env.PORT for deployment
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
