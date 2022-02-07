"use strict";

var dotenv = require("dotenv").config();

var express = require("express");

var routes = require("./routes");

var db = require("./config/mongoose");

var passport = require("passport");

var jwtPassport = require("./config/passport-jwt");

var path = require("path");

var port = process.env.port || 4000;
var app = express();
app.use(express.urlencoded()); // app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PATCH");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });

app.use("/", routes);
app.use(express["static"]("client/build"));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(port, function (err) {
  if (err) {
    console.log("Error : ".concat(err));
  }

  console.log("Server Running on Port: ".concat(port));
}); // const dotenv = require("dotenv").config();
// const express = require("express");
// const routes = require("./routes");
// const db = require("./config/mongoose");
// const passport = require("passport");
// const jwtPassport = require("./config/passport-jwt");
// const env = require("./config/environment");
// const path = require("path");
// const port = env.port;
// const app = express();
// app.use(express.urlencoded());
// app.use(function (req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next();
// });
// app.use("/", routes);
// app.use(express.static("client/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });
// app.listen(port, function (err) {
//   if (err) {
//     console.log(`Error : ${err}`);
//   }
//   console.log(`Server Running on Port: ${port}`);
// });