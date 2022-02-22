"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchStudent = fetchStudent;
exports.fetchStudentSuccess = fetchStudentSuccess;
exports.fetchStudentById = fetchStudentById;
exports.fetchStudentByIdSuccess = fetchStudentByIdSuccess;
exports.removeFetchStudentByID = removeFetchStudentByID;
exports.updateStudentDetail = updateStudentDetail;
exports.addStudent = addStudent;

var _url = require("../helpers/url");

var _utils = require("../helpers/utils");

var _actionType = require("./actionType");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fetchStudent(query) {
  return function _callee(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            url = _url.APIUrls.fetchStudents(query);
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "GET",
              headers: (0, _utils.getHeaderWithAuth)()
            }));

          case 4:
            response = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context.sent;
            dispatch(fetchStudentSuccess(data.data.studentList));
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}

function fetchStudentSuccess(studentList) {
  return {
    type: _actionType.FETCH_STUDENT_SUCCESS,
    studentList: studentList
  };
}

function fetchStudentById(id) {
  return function _callee2(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            url = _url.APIUrls.fetchStudentById(id);
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "GET",
              headers: (0, _utils.getHeaderWithAuth)()
            }));

          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context2.sent;

            if (data.success) {
              dispatch(fetchStudentByIdSuccess(data.student[0]));
            } else {
              console.log(data);
            }

            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}

function fetchStudentByIdSuccess(student) {
  // console.log(student[0]);
  return {
    type: _actionType.FETCH_SINGLE_STUDENT,
    student: student
  };
}

function removeFetchStudentByID() {
  return {
    type: _actionType.REMOVE_SINGLE_STUDENT
  };
}

function updateStudentDetail(id, detail) {
  return function _callee3(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            url = _url.APIUrls.updateStudentDetail();
            _context3.next = 4;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "PATCH",
              headers: (0, _utils.getHeaderWithAuth)(),
              body: (0, _utils.getFormBody)({
                id: id,
                detail: detail
              })
            }));

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context3.sent;
            console.log(data);

            if (data.success) {
              dispatch(updateStudentDetailSuccess(data.student));
            } else {
              console.log(data);
            }

            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 12]]);
  };
}

function updateStudentDetailSuccess(student) {
  return {
    type: _actionType.UPDATE_STUDENT_DETAILS_SUCCESS,
    student: student
  };
}

function addStudent(formInput) {
  return function _callee4(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            // dispatch()
            url = _url.APIUrls.addStudentForm();
            _context4.next = 4;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "POST",
              headers: (0, _utils.getHeaderWithAuth)(),
              body: (0, _utils.getFormBody)(formInput)
            }));

          case 4:
            response = _context4.sent;
            _context4.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context4.sent;
            return _context4.abrupt("return", data);

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", {
              data: {
                success: false,
                message: "Some Error Occured While Receiving the data"
              }
            });

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 11]]);
  };
}