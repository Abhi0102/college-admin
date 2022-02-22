"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = auth;

var _actionType = require("../actions/actionType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialAuthState = {
  user: {},
  error: null,
  successMessage: null,
  isLoggedIn: null,
  inProgress: null,
  authProgress: false
};

function auth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialAuthState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType.SIGNUP_START:
    case _actionType.LOGIN_START:
      return _objectSpread({}, state, {
        inProgress: true,
        error: null,
        successMessage: null
      });

    case _actionType.SIGNUP_FAIL:
    case _actionType.LOGIN_FAIL:
      return _objectSpread({}, state, {
        error: action.error,
        inProgress: false,
        successMessage: null
      });

    case _actionType.SIGNUP_SUCCESS:
      return _objectSpread({}, state, {
        inProgress: false,
        successMessage: action.successMessage,
        error: null
      });

    case _actionType.SUCCESS_AUTHENTICATE:
    case _actionType.LOGIN_SUCCESS:
      return _objectSpread({}, state, {
        user: action.user,
        isLoggedIn: true,
        error: null,
        inProgress: false,
        authProgress: false
      });

    case _actionType.LOG_OUT:
      return _objectSpread({}, state, {
        user: {},
        isLoggedIn: false,
        authProgress: false
      });

    case _actionType.AUTHENTICATION_PROGRESS:
      return _objectSpread({}, state, {
        authProgress: true
      });

    default:
      return state;
  }
}