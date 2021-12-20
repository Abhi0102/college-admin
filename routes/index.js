const express = require("express");
const router = express.Router();

router.use("/api", require("./api/v1/index"));

module.exports = router;
