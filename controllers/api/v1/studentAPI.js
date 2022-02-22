const Student = require("../../../models/studentForm");
const Counter = require("../../../helpers/appGenerator");
const StudentQualification = require("../../../models/studentQualification");
const FormField = require("../../../models/formField");
const Options = require("../../../models/options");

// module.exports.studentForm = async function (req, res) {
//   // console.log(JSON.parse(req.body.qualification));
//   req.body.qualification = JSON.parse(req.body.qualification);

//   if (
//     !/^\d+$/.test(req.body.mobileNumber) ||
//     req.body.mobileNumber.length !== 10
//   ) {
//     console.log("Mobile Numer");
//     return res.status(422).json({
//       data: {
//         success: false,
//         message: "Incorrect mobile number",
//       },
//     });
//   } else if (
//     !/^\d+$/.test(req.body.gaurdianMobileNumber) ||
//     req.body.gaurdianMobileNumber.length !== 10
//   ) {
//     return res.status(422).json({
//       data: {
//         success: false,
//         message: "Incorrect gaurdian mobile number",
//       },
//     });
//   } else if (!/^\d+$/.test(req.body.gaurdianAnualIncome)) {
//     return res.status(422).json({
//       data: {
//         success: false,
//         message: "Annual Income should contain numbers only",
//       },
//     });
//   } else if (!/^\d+$/.test(req.body.aadhaarNumber)) {
//     return res.status(422).json({
//       data: {
//         success: false,
//         message: "Aadhar Number Should have numbers only",
//       },
//     });
//   }

//   try {
//     // req.body.appNo = await Counter.getNextSequence("app_no");
//     const student = await Student.create({
//       ...req.body,
//     });
//     const studentQualification = await StudentQualification.create({
//       student_id: student._id,
//       qualification: req.body.qualification,
//     });
//     return res.status(200).json({
//       data: {
//         success: true,
//       },
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   //   console.log(/d^\d+$/.test(req.body.gaurdianMobileNumber));
//   return res.status(200).json({
//     data: {
//       success: true,
//     },
//   });
// };

module.exports.studentForm = async function (req, res) {
  // console.log(JSON.parse(req.body));
  req.body.qualification = JSON.parse(req.body.qualification);

  // console.log(req.body.qualification);
  try {
    const student = await Student.create(req.body);
    return res.status(200).json({
      data: {
        success: true,
        message: `Student successfully added with App No. - ${student.appNo}`,
      },
    });
  } catch (err) {
    if (err.name === "MongoServerError" && err.code === 11000) {
      return res.status(422).json({
        data: {
          success: false,
          message: "App No. already present. It should be unique.",
        },
      });
    }
    return res.status(422).json({
      data: {
        success: false,
        message: "Some error occured while adding Student",
      },
    });
  }
};

module.exports.getStudents = async function (req, res) {
  const searchCriteria = {};
  for (let [key, value] of Object.entries(req.query)) {
    if (value !== "") {
      searchCriteria[key] = value;
    }
  }
  try {
    const student = await Student.find(searchCriteria);

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
    // const student = await Student.find({ _id: req.query.id }).populate({
    //   path: "qualification",
    //   select: "qualification",
    // });

    const student = await Student.find({ _id: req.query.id });
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
    // console.log(req.body.detail);
    if (req.body.detail) {
      const student = await Student.findByIdAndUpdate(
        req.body.id,
        req.body.detail
      );

      return res.status(200).json({
        success: true,
        student,
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

// module.exports.patchStudent = async function (req, res) {
//   try {
//     req.body.detail = JSON.parse(req.body.detail);

//     let studentDetail = {};
//     let qualification = {};
//     for (let i in req.body.detail) {
//       if (i === "qualification") {
//         qualification[i] = req.body.detail[i];
//       } else {
//         studentDetail[i] = req.body.detail[i];
//       }
//     }
//     console.log(studentDetail);
//     let student;
//     if (studentDetail) {
//       student = await Student.findByIdAndUpdate(req.body.id, studentDetail);
//       // console.log(student);
//     }
//     if (qualification) {
//       // student = await Student.findById(req.body.id);
//       if (student.qualification) {
//         const qualify = await StudentQualification.findByIdAndUpdate(
//           student.qualification,
//           qualification
//         );
//       } else {
//         // console.log("Hey");
//         const qualify = await StudentQualification.create(qualification);
//         const updateStudent = await Student.findByIdAndUpdate(req.body.id, {
//           qualification: qualify._id,
//         });
//       }
//     }
//     student = await Student.find({ _id: req.body.id }).populate({
//       path: "qualification",
//       select: "qualification",
//     });
//     return res.status(200).json({
//       success: true,
//       student,
//     });
//   } catch (err) {
//     console.log(err);
// return res.status(422).json({
//   success: false,
//   error: "No data Found",
// });
//   }
// };

module.exports.studentCorrection = async function (req, res) {
  // const studentQualification = await StudentQualification.find({});
  // for (let i in studentQualification) {
  //   const student = await Student.findById(studentQualification[i].student_id);
  //   const student2 = await Student.findByIdAndUpdate(
  //     studentQualification[i].student_id,
  //     { qualification: studentQualification[i].qualification }
  //   );
  // }

  const formField = await FormField.find({});
  for (let i in formField) {
    const data = formField[i].data;
    for (let k in data) {
      if (data[k].type === "select") {
        const opt = await Options.findById(data[k].option);
        data[k].option = opt.data;
      }
    }
  }
  const options = await Options.find({});
  // console.log(formField);
  // console.log(options);

  return res.status(200).json({
    status: true,
    data: formField,
  });
};
