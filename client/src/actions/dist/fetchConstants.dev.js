"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchConstants = fetchConstants;

var _url = require("../helpers/url");

var _utils = require("../helpers/utils");

var _actionType = require("../actions/actionType");

function fetchConstants() {
  return function _callee(dispatch) {
    var url, response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = _url.APIUrls.fetchConstants();
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "GET",
              headers: (0, _utils.getHeaderWithAuth)()
            }));

          case 3:
            response = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(response.json());

          case 6:
            data = _context.sent;

            if (data.success) {
              dispatch(successFetchConstants(data.data));
            }

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}

function successFetchConstants(data) {
  return {
    type: _actionType.FETCH_CONSTANTS_SUCCESS,
    fields: data
  };
}