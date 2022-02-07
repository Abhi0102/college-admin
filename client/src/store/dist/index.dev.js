"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reducers = _interopRequireDefault(require("../reducers"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function configureStore() {
  var store = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxThunk["default"], _reduxLogger["default"]));
  return store;
}