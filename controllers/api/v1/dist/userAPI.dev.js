"use strict";

var User = require("../../../models/user");

var jwt = require("jsonwebtoken");

var nextSeq = require("../../../helpers/appGenerator");

var Constant = require("../../../models/constants");

var FormField = require("../../../models/formField");

var Options = require("../../../models/options");

var studentAPI = require("./studentAPI"); // const { getNextSequence } = require("../../../helpers/appGenerator");


module.exports.register = function _callee(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.body.password !== req.body.confirmPassword)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            data: {
              success: false,
              message: "Password and Confirmed Password doesn't match "
            }
          }));

        case 4:
          if (!(req.body.password === req.body.confirmPassword)) {
            _context.next = 16;
            break;
          }

          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(User.create({
            name: req.body.name,
            userName: req.body.userName,
            password: req.body.password
          }));

        case 8:
          user = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            data: {
              success: true,
              message: "User Successfully Created"
            }
          }));

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](5);

          if (!(_context.t0.code === 11000)) {
            _context.next = 16;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            data: {
              success: false,
              message: "User Name Already Exists "
            }
          }));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 12]]);
};

module.exports.userLogin = function _callee2(req, res) {
  var user, userJWT;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            userName: req.body.userName
          }));

        case 3:
          user = _context2.sent;

          if (!(user && user.password === req.body.password)) {
            _context2.next = 9;
            break;
          }

          userJWT = {
            _id: user._id,
            name: user.name,
            userName: user.userName
          }; // console.log("Success");

          return _context2.abrupt("return", res.status(200).json({
            data: {
              token: jwt.sign(userJWT, process.env.SECRET, {
                expiresIn: "50000000"
              }),
              success: true,
              user: userJWT
            }
          }));

        case 9:
          return _context2.abrupt("return", res.status(422).json({
            data: {
              success: false,
              message: "Username or Password Incorrect"
            }
          }));

        case 10:
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.log("Error in userLogin ".concat(_context2.t0));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

module.exports.authenticate = function (req, res) {
  // console.log(req.body);
  return res.status(200).json({
    data: {
      success: true
    }
  });
}; // module.exports.dataCorrection = function(req,res){
//   const student =
// }


module.exports.fetchConstants = function _callee3(req, res) {
  var formField, classwiseStudentStats, genderwiseStudentStats, categorywiseStudentStats, i, data, k, opt, options;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(FormField.find({}).sort("order"));

        case 3:
          formField = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(studentAPI.studentStats("studentClass"));

        case 6:
          classwiseStudentStats = _context3.sent;
          _context3.next = 9;
          return regeneratorRuntime.awrap(studentAPI.studentStats("gender"));

        case 9:
          genderwiseStudentStats = _context3.sent;
          _context3.next = 12;
          return regeneratorRuntime.awrap(studentAPI.categoryStats());

        case 12:
          categorywiseStudentStats = _context3.sent;
          _context3.t0 = regeneratorRuntime.keys(formField);

        case 14:
          if ((_context3.t1 = _context3.t0()).done) {
            _context3.next = 29;
            break;
          }

          i = _context3.t1.value;
          data = formField[i].data;
          _context3.t2 = regeneratorRuntime.keys(data);

        case 18:
          if ((_context3.t3 = _context3.t2()).done) {
            _context3.next = 27;
            break;
          }

          k = _context3.t3.value;

          if (!(data[k].type === "select")) {
            _context3.next = 25;
            break;
          }

          _context3.next = 23;
          return regeneratorRuntime.awrap(Options.findById(data[k].option));

        case 23:
          opt = _context3.sent;
          data[k].option = opt.data;

        case 25:
          _context3.next = 18;
          break;

        case 27:
          _context3.next = 14;
          break;

        case 29:
          _context3.next = 31;
          return regeneratorRuntime.awrap(Options.find({}));

        case 31:
          options = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            success: true,
            data: {
              formField: formField,
              options: options,
              classwiseStudentStats: classwiseStudentStats[0],
              genderwiseStudentStats: genderwiseStudentStats[0],
              categorywiseStudentStats: categorywiseStudentStats
            }
          }));

        case 35:
          _context3.prev = 35;
          _context3.t4 = _context3["catch"](0);
          console.log(_context3.t4);
          return _context3.abrupt("return", res.status(422).json({
            success: false,
            message: "Some error occured while fetching Constants"
          }));

        case 39:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 35]]);
};