const express = require("express");
const router = express.Router();
const passport = require("passport");
const studentAPI = require("../../../controllers/api/v1/studentAPI");
const genPDF = require("../../../controllers/api/v1/idCardAPI");

// router.get("/register", function (req, res) {
//   console.log("Hey");
// });

router.post(
  "/submitForm",
  passport.authenticate("jwt", { session: false }),
  studentAPI.studentForm
);

router.get(
  "/fetchStudents",
  passport.authenticate("jwt", { session: false }),
  studentAPI.getStudents
  // studentAPI.setQualify
);

router.get(
  "/fetchStudentById",
  passport.authenticate("jwt", { session: false }),
  studentAPI.getStudentById
  // studentAPI.setQualify
);

router.patch(
  "/patchStudent",
  passport.authenticate("jwt", { session: false }),
  studentAPI.patchStudent
);

// router.post("/register", userAPI.register);

router.post(
  "/generateIdCard",
  passport.authenticate("jwt", { session: false }),
  genPDF.pdfCreate
);

router.get(
  "/generateIdCard",
  passport.authenticate("jwt", { session: false }),
  genPDF.getPdf
);
module.exports = router;
