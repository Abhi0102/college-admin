const express = require("express");
const router = express.Router();
const pdf = require("../controllers/api/v1/idCardAPI");

router.use("/", require("./api/v1/index"));

router.get("/", function (req, res) {
  return res.status(200).json({
    status: true,
    data: {
      a: "Hello",
      b: "Yolo",
    },
  });
});

module.exports = router;
