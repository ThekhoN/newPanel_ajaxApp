"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// +++++ Android 4.4.2 detection +++++ //

var getAndroidVersionX99 = function getAndroidVersionX99(ua) {
  ua = (ua || navigator.userAgent).toLowerCase();
  var match = ua.match(/android\s([0-9\.]*)/);
  return match ? match[1] : false;
};

var userAgentCheck_android442 = function userAgentCheck_android442(ua) {
  var _getAndroidVersionX99 = getAndroidVersionX99(ua);
  var version0 = void 0;
  //if android
  if (_getAndroidVersionX99) {
    version0 = parseInt(_getAndroidVersionX99, 10);
    if (version0 < 5) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
//ua string for android442
//var AndroidV4_ua = 'Mozilla/5.0 (Linux; Android 4.4; Nexus 4 Build/KRT16E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.105 Mobile Safari';

exports.default = userAgentCheck_android442;