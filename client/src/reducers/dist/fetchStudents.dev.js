"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fetchStudents;

var _actionType = require("../actions/actionType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialStudentDetailsState = {
  studentList: [],
  student: {},
  error: null
};

function fetchStudents() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialStudentDetailsState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType.FETCH_STUDENT_SUCCESS:
      return _objectSpread({}, state, {
        studentList: action.studentList,
        error: null
      });

    case _actionType.FETCH_SINGLE_STUDENT:
    case _actionType.UPDATE_STUDENT_DETAILS_SUCCESS:
      return _objectSpread({}, state, {
        student: action.student,
        error: null
      });

    case _actionType.REMOVE_SINGLE_STUDENT:
      return _objectSpread({}, state, {
        student: {},
        error: null
      });

    case _actionType.FETCH_STUDENT_FAIL:
    case _actionType.FETCH_SINGLE_STUDENT_FAILED:
      return {
        studentList: [],
        student: {},
        error: action.error
      };

    default:
      return state;
  }
}