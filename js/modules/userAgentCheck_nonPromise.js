'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//import isIE10orLess from './userAgent_isIE10orLess';

// +++++ BrowserDetection +++++ //
//UC Browser
var isUCBrowser = navigator.userAgent.indexOf('UCBrowser') > 0;

var userAgentCheck_nonPromise = function userAgentCheck_nonPromise() {
    if (isUCBrowser) {
        console.log('y u not support promises O_o');
        return true;
    } else {
        console.log('promises supported ;)');
        return false;
    }
};
exports.default = userAgentCheck_nonPromise;
// +++++ /BrowserDetection +++++ //