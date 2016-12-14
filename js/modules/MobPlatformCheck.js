'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MobPlatformCheck = function MobPlatformCheck() {
  var currURLX = window.location;
  var mob_preURL_str = 'm.snapdeal.com';
  currURLX = String(currURLX);
  var mobileSite_running = currURLX.indexOf(mob_preURL_str) > 0 ? true : false;
  return mobileSite_running;
};

exports.default = MobPlatformCheck;