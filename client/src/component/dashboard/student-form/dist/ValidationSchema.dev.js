"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Yup = _interopRequireWildcard(require("yup"));

var _FormModel = require("../student-profile/FormModel");

var _Yup$object$shape, _Yup$object$shape2, _Yup$object$shape3, _Yup$object$shape4;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _model$formField = _FormModel.model.formField,
    appNo = _model$formField.appNo,
    admDate = _model$formField.admDate,
    studentName = _model$formField.studentName,
    studentClass = _model$formField.studentClass,
    gender = _model$formField.gender,
    dateOfBirth = _model$formField.dateOfBirth,
    category = _model$formField.category,
    subCategory = _model$formField.subCategory,
    emailId = _model$formField.emailId,
    mobileNumber = _model$formField.mobileNumber,
    religion = _model$formField.religion,
    documentCompleted = _model$formField.documentCompleted,
    aadhaarNumber = _model$formField.aadhaarNumber,
    vatsalyaYojana = _model$formField.vatsalyaYojana,
    fatherName = _model$formField.fatherName,
    motherName = _model$formField.motherName,
    gaurdianName = _model$formField.gaurdianName,
    gaurdianRelationship = _model$formField.gaurdianRelationship,
    annualIncome = _model$formField.annualIncome,
    gaurdianMobileNumber = _model$formField.gaurdianMobileNumber,
    permanentAddress = _model$formField.permanentAddress,
    state = _model$formField.state,
    gaurdianAddress = _model$formField.gaurdianAddress,
    residanceRegion = _model$formField.residanceRegion,
    durationOfResidance = _model$formField.durationOfResidance,
    residanceOfUK = _model$formField.residanceOfUK,
    instituteRegion = _model$formField.instituteRegion,
    examinationPassed = _model$formField.examinationPassed,
    lastAttended = _model$formField.lastAttended,
    qualification = _model$formField.qualification,
    subject1 = _model$formField.subject1,
    subject2 = _model$formField.subject2,
    subject3 = _model$formField.subject3;
var _default = {
  "Personal Details": Yup.object().shape((_Yup$object$shape = {}, _defineProperty(_Yup$object$shape, appNo.name, Yup.string().required("".concat(appNo.errorMessage))), _defineProperty(_Yup$object$shape, admDate.name, Yup.date().required("".concat(admDate.errorMessage))), _defineProperty(_Yup$object$shape, studentName.name, Yup.string().required("".concat(studentName.errorMessage))), _defineProperty(_Yup$object$shape, studentClass.name, Yup.string().required("".concat(studentClass.errorMessage))), _defineProperty(_Yup$object$shape, gender.name, Yup.string().required("".concat(gender.errorMessage))), _defineProperty(_Yup$object$shape, dateOfBirth.name, Yup.date().required("".concat(dateOfBirth.errorMessage))), _defineProperty(_Yup$object$shape, category.name, Yup.string().required("".concat(category.errorMessage))), _defineProperty(_Yup$object$shape, subCategory.name, Yup.string()), _defineProperty(_Yup$object$shape, emailId.name, Yup.string().email("".concat(emailId.invalidMessage)).required("".concat(emailId.errorMessage))), _defineProperty(_Yup$object$shape, mobileNumber.name, Yup.string().required("".concat(mobileNumber.errorMessage)).test("len", "".concat(mobileNumber.invalidMessage), function (val) {
    return val && val.length === 10;
  })), _defineProperty(_Yup$object$shape, religion.name, Yup.string().required("".concat(religion.errorMessage))), _defineProperty(_Yup$object$shape, documentCompleted.name, Yup.string().required("".concat(documentCompleted.errorMessage))), _defineProperty(_Yup$object$shape, aadhaarNumber.name, Yup.string().required("".concat(aadhaarNumber.errorMessage))), _defineProperty(_Yup$object$shape, vatsalyaYojana.name, Yup.string().required("".concat(vatsalyaYojana.errorMessage))), _Yup$object$shape)),
  "Family Details": Yup.object().shape((_Yup$object$shape2 = {}, _defineProperty(_Yup$object$shape2, fatherName.name, Yup.string().required("".concat(fatherName.errorMessage))), _defineProperty(_Yup$object$shape2, motherName.name, Yup.string().required("".concat(motherName.errorMessage))), _defineProperty(_Yup$object$shape2, gaurdianName.name, Yup.string().required("".concat(gaurdianName.errorMessage))), _defineProperty(_Yup$object$shape2, gaurdianRelationship.name, Yup.string().required("".concat(gaurdianRelationship.errorMessage))), _defineProperty(_Yup$object$shape2, annualIncome.name, Yup.number("".concat(annualIncome.invalidMessage)).required("".concat(annualIncome.errorMessage))), _defineProperty(_Yup$object$shape2, gaurdianMobileNumber.name, Yup.string().required("".concat(gaurdianMobileNumber.errorMessage)).test("len", "".concat(gaurdianMobileNumber.invalidMessage), function (val) {
    return val && val.length === 10;
  })), _Yup$object$shape2)),
  "Address Details": Yup.object().shape((_Yup$object$shape3 = {}, _defineProperty(_Yup$object$shape3, permanentAddress.name, Yup.string().required("".concat(permanentAddress.errorMessage))), _defineProperty(_Yup$object$shape3, state.name, Yup.string().required("".concat(state.errorMessage))), _defineProperty(_Yup$object$shape3, gaurdianAddress.name, Yup.string().required("".concat(gaurdianAddress.errorMessage))), _defineProperty(_Yup$object$shape3, residanceRegion.name, Yup.string().required("".concat(residanceRegion.errorMessage))), _defineProperty(_Yup$object$shape3, durationOfResidance.name, Yup.string().required("".concat(durationOfResidance.errorMessage))), _defineProperty(_Yup$object$shape3, residanceOfUK.name, Yup.string().required("".concat(residanceOfUK.errorMessage))), _Yup$object$shape3)),
  "Education Qualification": Yup.object().shape((_Yup$object$shape4 = {}, _defineProperty(_Yup$object$shape4, instituteRegion.name, Yup.string().required("".concat(instituteRegion.errorMessage))), _defineProperty(_Yup$object$shape4, examinationPassed.name, Yup.string().required("".concat(examinationPassed.errorMessage))), _defineProperty(_Yup$object$shape4, lastAttended.name, Yup.string().required("".concat(lastAttended.errorMessage))), _defineProperty(_Yup$object$shape4, subject1.name, Yup.string().required("".concat(subject1.errorMessage))), _defineProperty(_Yup$object$shape4, subject2.name, Yup.string()), _defineProperty(_Yup$object$shape4, subject3.name, Yup.string()), _Yup$object$shape4)),
  "Education History": Yup.object().shape(_defineProperty({}, qualification.name, Yup.array(Yup.object({
    examination: Yup.string().required("".concat(studentName.errorMessage)),
    year: Yup.string().required("".concat(studentName.errorMessage)),
    board: Yup.string().required("".concat(studentName.errorMessage)),
    marks: Yup.string().required("".concat(studentName.errorMessage)),
    subjects: Yup.string().required("".concat(studentName.errorMessage))
  })).min(1)))
};
exports["default"] = _default;