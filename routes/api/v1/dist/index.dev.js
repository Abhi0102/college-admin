"use strict";

var express = require("express");

var router = express.Router();
router.use("/user", require("./user"));
router.use("/student", require("./student"));
module.exports = router;