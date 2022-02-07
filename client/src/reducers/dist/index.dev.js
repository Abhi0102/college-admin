"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _auth = _interopRequireDefault(require("./auth"));

var _fetchStudents = _interopRequireDefault(require("./fetchStudents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import studentForm from './studentForm';
var _default = (0, _redux.combineReducers)({
  auth: _auth["default"],
  fetchStudents: _fetchStudents["default"]
});

exports["default"] = _default;