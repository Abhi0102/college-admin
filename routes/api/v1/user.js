const express = require("express");
const router = express.Router();
const userAPI = require("../../../controllers/api/v1/userAPI");

// router.get("/register", function (req, res) {
//   console.log("Hey");
// });

router.post("/login", userAPI.userLogin);
router.post("/register", userAPI.register);

module.exports = router;
