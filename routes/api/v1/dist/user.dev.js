"use strict";

var express = require("express");

var router = express.Router();

var passport = require("passport");

var userAPI = require("../../../controllers/api/v1/userAPI"); // router.get("/register", function (req, res) {
//   console.log("Hey");
// });


router.post("/login", userAPI.userLogin);
router.get("/authenticate", passport.authenticate("jwt", {
  session: false
}), userAPI.authenticate);
router.post("/register", userAPI.register);
router.get("/", function (req, res) {
  return res.status(200).json({
    status: true,
    data: {
      a: "Hello",
      b: "Yolo"
    }
  });
});
module.exports = router;