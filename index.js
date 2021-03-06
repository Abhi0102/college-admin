const dotenv = require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const db = require("./config/mongoose");
const passport = require("passport");
const jwtPassport = require("./config/passport-jwt");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded());

app.use("/api", routes);
// "proxy": "http://localhost:8000",
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server Running on Port: ${PORT}`);
});

// const dotenv = require("dotenv").config();
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
