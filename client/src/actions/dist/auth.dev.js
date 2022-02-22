"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLogin = startLogin;
exports.loginFailed = loginFailed;
exports.loginSuccess = loginSuccess;
exports.login = login;
exports.startSignup = startSignup;
exports.signupFailed = signupFailed;
exports.signupSuccess = signupSuccess;
exports.signup = signup;
exports.successAuthentication = successAuthentication;
exports.logout = logout;
exports.authenticationProgress = authenticationProgress;
exports.authenticateUser = authenticateUser;

var _actionType = require("./actionType");

var _url = require("../helpers/url");

var _costants = require("../helpers/costants");

var _utils = require("../helpers/utils");

var _fetchConstants = require("./fetchConstants");

function startLogin() {
  return {
    type: _actionType.LOGIN_START
  };
}

function loginFailed(errorMessage) {
  return {
    type: _actionType.LOGIN_FAIL,
    error: errorMessage
  };
}

function loginSuccess(user) {
  return {
    type: _actionType.LOGIN_SUCCESS,
    user: user
  };
}

function login(userName, password) {
  return function _callee(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch(startLogin());
            url = _url.APIUrls.login();
            _context.next = 4;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "POST",
              headers: _costants.headerWithoutAuth,
              body: (0, _utils.getFormBody)({
                userName: userName,
                password: password
              })
            }));

          case 4:
            response = _context.sent;

            if (response.status === 404) {
              dispatch(loginFailed(response.status + " " + response.statusText));
            } // console.log(response.status);


            _context.next = 8;
            return regeneratorRuntime.awrap(response.json());

          case 8:
            data = _context.sent;
            console.log(data);

            if (!data.data.success) {
              dispatch(loginFailed(data.data.message));
            }

            if (data.data.success) {
              localStorage.setItem("token", data.data.token);
              dispatch(loginSuccess(data.data.user));
              dispatch((0, _fetchConstants.fetchConstants)()); // console.log(data.data.token);
            } // if (data.success) {
            // some success code
            //   return;
            // } else {
            //   dispatch(loginFailed(data.message));
            // }
            // console.log(response);
            // console.log('Hey', userName, password);


          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}

function startSignup() {
  return {
    type: _actionType.SIGNUP_START
  };
}

function signupFailed(errorMessage) {
  return {
    type: _actionType.SIGNUP_FAIL,
    error: errorMessage
  };
}

function signupSuccess(message) {
  return {
    type: _actionType.SIGNUP_SUCCESS,
    successMessage: message
  };
}

function signup(name, userName, password, confirmPassword) {
  return function _callee2(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch(startSignup());
            url = _url.APIUrls.signup();
            _context2.next = 4;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "POST",
              headers: _costants.headerWithoutAuth,
              body: (0, _utils.getFormBody)({
                name: name,
                userName: userName,
                password: password,
                confirmPassword: confirmPassword
              })
            }));

          case 4:
            response = _context2.sent;

            if (response.status === 404) {
              dispatch(signupFailed(response.status + " " + response.statusText));
            } // console.log(response.status);


            _context2.next = 8;
            return regeneratorRuntime.awrap(response.json());

          case 8:
            data = _context2.sent;

            if (!data.data.success) {
              dispatch(signupFailed(data.data.message));
            }

            if (data.data.success) {
              dispatch(signupSuccess(data.data.message));
            }

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
}

function successAuthentication(user) {
  return {
    type: _actionType.SUCCESS_AUTHENTICATE,
    user: user
  };
}

function logout() {
  localStorage.removeItem("token");
  return {
    type: _actionType.LOG_OUT
  };
}

function authenticationProgress() {
  return {
    type: _actionType.AUTHENTICATION_PROGRESS
  };
}

function authenticateUser(user) {
  return function _callee3(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch(authenticationProgress());
            _context3.prev = 1;
            url = _url.APIUrls.checkAuthentication();
            _context3.next = 5;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "GET",
              headers: _costants.headerWithAuth
            }));

          case 5:
            response = _context3.sent;
            _context3.next = 8;
            return regeneratorRuntime.awrap(response.json());

          case 8:
            data = _context3.sent;

            if (data.data.success) {
              // console.log;
              dispatch(successAuthentication(user));
              dispatch((0, _fetchConstants.fetchConstants)());
            } else {
              dispatch(logout());
            }

            _context3.next = 16;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            console.log("Error in authentication", _context3.t0);
            dispatch(logout());

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 12]]);
  };
}