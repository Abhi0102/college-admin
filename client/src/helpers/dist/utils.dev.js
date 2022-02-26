"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormBody = getFormBody;
exports.getAuthToken = getAuthToken;
exports.getHeaderWithAuth = getHeaderWithAuth;

function getFormBody(params) {
  var formBody = []; // console.log(params);

  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&');
}

function getAuthToken() {
  return localStorage.getItem('token');
}

function getHeaderWithAuth() {
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: "Bearer ".concat(getAuthToken())
  };
} // export const headerWithoutAuth = {
//   'Content-Type': 'application/x-www-form-urlencoded',
// };
// export const headerWithAuth = {
// 'Content-Type': 'application/x-www-form-urlencoded',
// Authorization: `Bearer ${getAuthToken()}`,
// };
// export const headerWithAuthJSON = {
//   'Content-Type': 'application/json',
//   Authorization: `Bearer ${getAuthToken()}`,
// };