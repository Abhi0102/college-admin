"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APIUrls = void 0;
var baseUrl = "";
var APIUrls = {
  login: function login() {
    return "".concat(baseUrl, "/api/user/login");
  },
  signup: function signup() {
    return "".concat(baseUrl, "/api/user/register");
  },
  checkAuthentication: function checkAuthentication() {
    return "".concat(baseUrl, "/api/user/authenticate");
  },
  addStudentForm: function addStudentForm() {
    return "".concat(baseUrl, "/api/student/submitForm");
  },
  fetchStudents: function fetchStudents(query) {
    return "".concat(baseUrl, "/api/student/fetchStudents?gender=").concat(query.gender, "&category=").concat(query.category, "&studentClass=").concat(query["class"]);
  },
  fetchStudentById: function fetchStudentById(id) {
    return "".concat(baseUrl, "/api/student/fetchStudentById?id=").concat(id);
  },
  updateStudentDetail: function updateStudentDetail() {
    return "".concat(baseUrl, "/api/student/patchStudent");
  },
  getIdCards: function getIdCards() {
    return "".concat(baseUrl, "/api/student/generateIdCard");
  }
}; // ${baseUrl}/api/user/register
// http://localhost:8000/api/v1

exports.APIUrls = APIUrls;