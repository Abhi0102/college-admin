const express = require("express");
const routes = require("./routes");
const app = express();

const port = 4000;

app.use(express.urlencoded());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", routes);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error : ${err}`);
  }
  console.log(`Server Running on Port: ${port}`);
});
