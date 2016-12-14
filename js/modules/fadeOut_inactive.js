'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classlistPolyfill = require('classlist-polyfill');

var _classlistPolyfill2 = _interopRequireDefault(_classlistPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fadeOut_inactive = function fadeOut_inactive() {
  var _inactive = document.getElementsByClassName('inactive');
  //console.log('addClass fadeOut...');
  for (var i = 0; i < _inactive.length; i++) {
    _inactive[i].classList.add('fadeOutx99');
  }
};

exports.default = fadeOut_inactive;