const express = require("express");
const router = express.Router();
const pdf = require("../controllers/api/v1/idCardAPI");

router.use("/api", require("./api/v1/index"));

router.get("/hey", pdf.pdfCreate);

module.exports = router;
