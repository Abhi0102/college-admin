const express = require("express");
const app = express();
const port = 4000;

app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server Running on Port: ${port}`);
});
