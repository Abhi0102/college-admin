const express = require("express");
const router = express.Router();
const passport = require("passport");
const studentAPI = require("../../../controllers/api/v1/studentAPI");

// router.get("/register", function (req, res) {
//   console.log("Hey");
// });

router.post(
  "/submitForm",
  passport.authenticate("jwt", { session: false }),
  studentAPI.studentForm
);

// router.post("/register", userAPI.register);

module.exports = router;
