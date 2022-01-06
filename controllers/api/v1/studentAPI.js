const Student = require("../../../models/studentForm");
const Counter = require("../../../helpers/appGenerator");
const StudentQualification = require("../../../models/studentQualification");

module.exports.studentForm = async function (req, res) {
  // console.log(JSON.parse(req.body.qualification));
  req.body.qualification = JSON.parse(req.body.qualification);
  
  if (
    !/^\d+$/.test(req.body.mobileNumber) ||
    req.body.mobileNumber.length !== 10
  ) {
    console.log("Mobile Numer");
    return res.status(422).json({
      data: {
        success: false,
        message: "Incorrect mobile number",
      },
    });
  } else if (
    !/^\d+$/.test(req.body.gaurdianMobileNumber) ||
    req.body.gaurdianMobileNumber.length !== 10
  ) {
    return res.status(422).json({
      data: {
        success: false,
        message: "Incorrect gaurdian mobile number",
      },
    });
  } else if (!/^\d+$/.test(req.body.gaurdianAnualIncome)) {
    return res.status(422).json({
      data: {
        success: false,
        message: "Annual Income should contain numbers only",
      },
    });
  } else if (!/^\d+$/.test(req.body.aadhaarNumber)) {
    return res.status(422).json({
      data: {
        success: false,
        message: "Aadhar Number Should have numbers only",
      },
    });
  }

  

  try {
    req.body.appNo = await Counter.getNextSequence("app_no");
    const student = await Student.create({
      ...req.body,
    });
    const studentQualification = await StudentQualification.create({
      student_id: student._id,
      qualification: req.body.qualification,
    });
    return res.status(200).json({
      data: {
        success: true,
      },
    });
  } catch (e) {
    console.log(e);
  }
  //   console.log(/d^\d+$/.test(req.body.gaurdianMobileNumber));
  return res.status(200).json({
    data: {
      success: true,
    },
  });
};

module.exports.getStudents = async function (req, res) {
  try {
    const student = await Student.find().sort({ appNo: -1 });
    return res.status(200).json({
      data: {
        success: true,
        studentList: student,
      },
    });
  } catch (err) {
    console.log("Error in finding Students");
    return res.status(422).json({
      data: {
        success: false,
        error: err,
      },
    });
  }
};
