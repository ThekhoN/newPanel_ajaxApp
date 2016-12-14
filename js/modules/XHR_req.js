'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var XHR_req = function XHR_req(url, callback) {
  console.log('rawXHR running!');
  var request = new XMLHttpRequest();
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
        data = JSON.parse(request.responseText);
      }
      callback(data);
    } else {
      console.log('Server reached but an internal error occured!');
    }
  };
  request.open('GET', url);
  request.onerror = function () {
    console.log("** An error occurred during the transaction");
  };
  request.send();
};

exports.default = XHR_req;