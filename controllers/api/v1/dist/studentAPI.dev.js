"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Student = require("../../../models/studentForm");

var Counter = require("../../../helpers/appGenerator");

var StudentQualification = require("../../../models/studentQualification");

var FormField = require("../../../models/formField");

var Options = require("../../../models/options"); // module.exports.studentForm = async function (req, res) {
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


module.exports.studentForm = function _callee(req, res) {
  var student;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log(JSON.parse(req.body));
          req.body.qualification = JSON.parse(req.body.qualification); // console.log(req.body.qualification);

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(Student.create(req.body));

        case 4:
          student = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            data: {
              success: true,
              message: "Student successfully added with App No. - ".concat(student.appNo)
            }
          }));

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);

          if (!(_context.t0.name === "MongoServerError" && _context.t0.code === 11000)) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.status(422).json({
            data: {
              success: false,
              message: "App No. already present. It should be unique."
            }
          }));

        case 12:
          return _context.abrupt("return", res.status(422).json({
            data: {
              success: false,
              message: "Some error occured while adding Student"
            }
          }));

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

module.exports.getStudents = function _callee2(req, res) {
  var searchCriteria, _i, _Object$entries, _Object$entries$_i, key, value, student;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          searchCriteria = {};

          for (_i = 0, _Object$entries = Object.entries(req.query); _i < _Object$entries.length; _i++) {
            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];

            if (value !== "") {
              searchCriteria[key] = value;
            }
          }

          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(Student.find(searchCriteria));

        case 5:
          student = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            data: {
              success: true,
              studentList: student
            }
          }));

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](2);
          console.log("Error in finding Students");
          return _context2.abrupt("return", res.status(422).json({
            data: {
              success: false,
              error: _context2.t0
            }
          }));

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

module.exports.getStudentById = function _callee3(req, res) {
  var student;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Student.find({
            _id: req.query.id
          }));

        case 3:
          student = _context3.sent;

          if (!student.length) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(200).json({
            success: true,
            student: student
          }));

        case 8:
          return _context3.abrupt("return", res.status(422).json({
            success: false,
            error: "No data Found"
          }));

        case 9:
          _context3.next = 15;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          return _context3.abrupt("return", res.status(422).json({
            success: false,
            error: "No data Found"
          }));

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports.patchStudent = function _callee4(req, res) {
  var student;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          req.body.detail = JSON.parse(req.body.detail); // console.log(req.body.detail);

          if (!req.body.detail) {
            _context4.next = 7;
            break;
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(Student.findByIdAndUpdate(req.body.id, req.body.detail));

        case 5:
          student = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            success: true,
            student: student
          }));

        case 7:
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
          return _context4.abrupt("return", res.status(422).json({
            success: false,
            error: "No data Found"
          }));

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
}; // module.exports.patchStudent = async function (req, res) {
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


module.exports.studentCorrection = function _callee5(req, res) {
  var formField, i, data, k, opt, options;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(FormField.find({}));

        case 2:
          formField = _context5.sent;
          _context5.t0 = regeneratorRuntime.keys(formField);

        case 4:
          if ((_context5.t1 = _context5.t0()).done) {
            _context5.next = 19;
            break;
          }

          i = _context5.t1.value;
          data = formField[i].data;
          _context5.t2 = regeneratorRuntime.keys(data);

        case 8:
          if ((_context5.t3 = _context5.t2()).done) {
            _context5.next = 17;
            break;
          }

          k = _context5.t3.value;

          if (!(data[k].type === "select")) {
            _context5.next = 15;
            break;
          }

          _context5.next = 13;
          return regeneratorRuntime.awrap(Options.findById(data[k].option));

        case 13:
          opt = _context5.sent;
          data[k].option = opt.data;

        case 15:
          _context5.next = 8;
          break;

        case 17:
          _context5.next = 4;
          break;

        case 19:
          _context5.next = 21;
          return regeneratorRuntime.awrap(Options.find({}));

        case 21:
          options = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            status: true,
            data: formField
          }));

        case 23:
        case "end":
          return _context5.stop();
      }
    }
  });
};