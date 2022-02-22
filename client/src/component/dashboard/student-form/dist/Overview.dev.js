"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _FormModel = require("../student-profile/FormModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Overview(props) {
  var formField = _FormModel.model.formField;
  console.log(formField);
  return; //   Object.keys(formField).map((element) => {
  //     return <Typography>{formField[element].label}</Typography>;
  //   });
}

var _default = Overview;
exports["default"] = _default;