'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fadeIn_active = function fadeIn_active() {
  var _OfferUnitX99 = document.getElementsByClassName('OfferUnitX99');
  for (var i = 0; i < _OfferUnitX99.length; i++) {
    _OfferUnitX99[i].classList.remove('invisX99');
  }
  //console.log('fadingIn_active . . .');
};

exports.default = fadeIn_active;