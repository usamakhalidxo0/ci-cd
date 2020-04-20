"use strict";
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 5000;
console.log("Hello World");
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
  res.send('hello world');
})
