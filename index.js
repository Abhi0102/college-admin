const express = require("express");
const routes = require("./routes");
const db = require("./config/mongoose");
const passport = require("passport");
const jwtPassport = require("./config/passport-jwt");
const app = express();

const port = 4000;

app.use(express.urlencoded());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", routes);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server Running on Port: ${port}`);
});
