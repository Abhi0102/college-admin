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
    // req.body.appNo = await Counter.getNextSequence("app_no");
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
  const searchCriteria = {};
  for (let [key, value] of Object.entries(req.query)) {
    if (value !== "") {
      searchCriteria[key] = value;
    }
  }
  try {
    const student = await Student.find(searchCriteria).populate({
      path: "qualification",
      select: "qualification",
    });

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

module.exports.getStudentById = async function (req, res) {
  try {
    const student = await Student.find({ _id: req.query.id }).populate({
      path: "qualification",
      select: "qualification",
    });
    if (student.length) {
      return res.status(200).json({
        success: true,
        student,
      });
    } else {
      return res.status(422).json({
        success: false,
        error: "No data Found",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(422).json({
      success: false,
      error: "No data Found",
    });
  }
};

module.exports.patchStudent = async function (req, res) {
  try {
    req.body.detail = JSON.parse(req.body.detail);
    // console.log(JSON.parse(req.body.detail));
    // console.log(req.body);
    let studentDetail = {};
    let qualification = {};
    for (let i in req.body.detail) {
      if (i === "qualification") {
        qualification[i] = req.body.detail[i];
      } else {
        studentDetail[i] = req.body.detail[i];
      }
    }
    console.log(studentDetail);
    let student;
    if (studentDetail) {
      student = await Student.findByIdAndUpdate(req.body.id, studentDetail);
      // console.log(student);
    }
    if (qualification) {
      // student = await Student.findById(req.body.id);
      if (student.qualification) {
        const qualify = await StudentQualification.findByIdAndUpdate(
          student.qualification,
          qualification
        );
      } else {
        // console.log("Hey");
        const qualify = await StudentQualification.create(qualification);
        const updateStudent = await Student.findByIdAndUpdate(req.body.id, {
          qualification: qualify._id,
        });
      }
    }
    student = await Student.find({ _id: req.body.id }).populate({
      path: "qualification",
      select: "qualification",
    });
    return res.status(200).json({
      success: true,
      student,
    });
  } catch (err) {
    console.log(err);
    return res.status(422).json({
      success: false,
      error: "No data Found",
    });
  }
};
