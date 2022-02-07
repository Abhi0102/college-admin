"use strict";

var express = require("express");

var router = express.Router();

var pdf = require("../controllers/api/v1/idCardAPI");

router.use("/", require("./api/v1/index"));
router.get("/hey", pdf.pdfCreate);
module.exports = router;