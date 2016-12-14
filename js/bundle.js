/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _XHR_req = __webpack_require__(1);

	var _XHR_req2 = _interopRequireDefault(_XHR_req);

	var _axios = __webpack_require__(2);

	var _axios2 = _interopRequireDefault(_axios);

	var _userAgentCheck_nonPromise = __webpack_require__(28);

	var _userAgentCheck_nonPromise2 = _interopRequireDefault(_userAgentCheck_nonPromise);

	var _domQuery_getIds_updateContainers = __webpack_require__(29);

	var _domQuery_getIds_updateContainers2 = _interopRequireDefault(_domQuery_getIds_updateContainers);

	var _Use_firstResponseData_singleReq = __webpack_require__(30);

	var _Use_firstResponseData_singleReq2 = _interopRequireDefault(_Use_firstResponseData_singleReq);

	var _SocialShare_page = __webpack_require__(35);

	var _SocialShare_page2 = _interopRequireDefault(_SocialShare_page);

	var _TimerX = __webpack_require__(36);

	var _TimerX2 = _interopRequireDefault(_TimerX);

	var _fadeOut_inactive = __webpack_require__(40);

	var _fadeOut_inactive2 = _interopRequireDefault(_fadeOut_inactive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	//polyfill es6-promise
	__webpack_require__(37).polyfill();

	var fastdom = __webpack_require__(39);


	//expose
	window.TimerX99 = _TimerX2.default;

	//console.log('createHTML_by_categoryNames: ', createHTML_by_categoryNames);
	//global vars - expose these
	var nonPromise = (0, _userAgentCheck_nonPromise2.default)();
	//const nonPromise = false;
	//console.log('nonPromise - :', nonPromise);
	//const showSoldOut_g = false;
	var finalHTML = [];
	var dataForRender = [];
	var dom_categoryNames = [];
	var firstResponseData = [];
	var secondResponseData = [];
	var pogIdList_arr = [];
	var dataLen = 0;
	var firstUrl = '';
	var Url_secondReq = '';
	var myFastdom = void 0;

	var AjaxPageApp = function () {
	  function AjaxPageApp(options) {
	    _classCallCheck(this, AjaxPageApp);

	    if (!options) {
	      options = {};
	    }
	    this.url = options.url ? options.url : '';
	    firstUrl = this.url;
	    this.parentWrapper_id = options.parentWrapper_id ? options.parentWrapper_id : 'mainWrapperX_newX999';
	    this.timerOfferUnits = options.timerOfferUnits ? options.timerOfferUnits : false;
	    this.showSoldOut_g = options.showSoldOut_g ? options.showSoldOut_g : false;
	    window.showSoldOut_g = this.showSoldOut_g; //global expose
	  }

	  _createClass(AjaxPageApp, [{
	    key: 'init',
	    value: function init() {
	      (0, _domQuery_getIds_updateContainers2.default)('offers_WrapperX99', dom_categoryNames, dataForRender, finalHTML);
	      var O_O = {
	        firstResponseData: firstResponseData,
	        dom_categoryNames: dom_categoryNames,
	        dataForRender: dataForRender,
	        nonPromise: nonPromise,
	        showSoldOut_g: showSoldOut_g,
	        finalHTML: finalHTML,
	        pogIdList_arr: pogIdList_arr,
	        firstUrl: firstUrl,
	        secondResponseData: secondResponseData,
	        dataLen: dataLen,
	        Url_secondReq: Url_secondReq
	      };

	      //XHR_req(this.url,function(data){Use_firstResponseData(data, O_O);});
	      if (nonPromise) {
	        console.log('running raw xhr. . .');
	        (0, _XHR_req2.default)(this.url, function (data) {
	          (0, _Use_firstResponseData_singleReq2.default)(data, O_O);
	        });
	      } else {
	        (0, _fadeOut_inactive2.default)();
	        window.myFastdomX99 = fastdom.extend(fastdomPromised);
	        console.log('running axios. . .');
	        _axios2.default.get(this.url).then(function (response) {
	          var data = response.data;
	          (0, _Use_firstResponseData_singleReq2.default)(data, O_O);
	        }).catch(function (err) {
	          console.log('err in axios first req: ', err);
	        });
	      }
	    }
	  }, {
	    key: 'get_url',
	    value: function get_url() {
	      return this.url;
	    }
	  }, {
	    key: 'get_showSoldOut_g',
	    value: function get_showSoldOut_g() {
	      console.log('get_showSoldOut_g running. . .');
	      return this.showSoldOut_g;
	    }
	  }]);

	  return AjaxPageApp;
	}();

	window.AjaxPageApp = AjaxPageApp;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var bind = __webpack_require__(5);
	var Axios = __webpack_require__(6);
	var defaults = __webpack_require__(7);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(25);
	axios.CancelToken = __webpack_require__(26);
	axios.isCancel = __webpack_require__(22);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(27);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(5);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(7);
	var utils = __webpack_require__(4);
	var InterceptorManager = __webpack_require__(19);
	var dispatchRequest = __webpack_require__(20);
	var isAbsoluteURL = __webpack_require__(23);
	var combineURLs = __webpack_require__(24);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(4);
	var normalizeHeaderName = __webpack_require__(9);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(10);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(10);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(4);
	var settle = __webpack_require__(11);
	var buildURL = __webpack_require__(14);
	var parseHeaders = __webpack_require__(15);
	var isURLSameOrigin = __webpack_require__(16);
	var createError = __webpack_require__(12);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(17);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(18);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(12);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(13);

	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);
	var transformData = __webpack_require__(21);
	var isCancel = __webpack_require__(22);
	var defaults = __webpack_require__(7);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(4);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(25);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

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

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function getIds_withTemplateClass(className, dom_categoryNames) {
	  var offers_WrapperX99 = document.getElementsByClassName(className);
	  for (var i = 0; i < offers_WrapperX99.length; i++) {
	    dom_categoryNames.push(offers_WrapperX99[i].getAttribute('id'));
	  }
	}

	function update_dataForRender(dom_categoryNames, dataForRender) {
	  for (var i = 0; i < dom_categoryNames.length; i++) {
	    dataForRender.push([]);
	  }
	}

	function update_finalHTML(dom_categoryNames, finalHTML) {
	  for (var i = 0; i < dom_categoryNames.length; i++) {
	    finalHTML.push([]);
	  }
	}

	var domQuery_getIds_updateContainers = function domQuery_getIds_updateContainers(className, dom_categoryNames, dataForRender, finalHTML) {
	  //console.log('domQuery_getIds_updateContainers running!');
	  getIds_withTemplateClass(className, dom_categoryNames);
	  update_dataForRender(dom_categoryNames, dataForRender);
	  update_finalHTML(dom_categoryNames, finalHTML);
	};

	exports.default = domQuery_getIds_updateContainers;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _axios = __webpack_require__(2);

	var _axios2 = _interopRequireDefault(_axios);

	var _createHTML_by_categoryNames_singleReq = __webpack_require__(31);

	var _createHTML_by_categoryNames_singleReq2 = _interopRequireDefault(_createHTML_by_categoryNames_singleReq);

	var _XHR_req = __webpack_require__(1);

	var _XHR_req2 = _interopRequireDefault(_XHR_req);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function updated_dataForRender_firstResponse(data, O_O) {
	  var firstResponseData = O_O.firstResponseData;
	  var dom_categoryNames = O_O.dom_categoryNames;
	  var dataForRender = O_O.dataForRender;

	  updated_ResponseData(data, firstResponseData).forEach(function (item) {
	    dom_categoryNames.forEach(function (this_categoryName, index) {
	      if (item.categoryName == this_categoryName) {
	        dataForRender[index].push(item);
	      }
	    });
	  });

	  return dataForRender;
	}

	var Use_firstResponseData = function Use_firstResponseData(response, O_O) {
	  var data = response.genericOfferItems;
	  //console.log('firstResponseData: ', data);

	  //const {pogIdList_arr} = O_O;
	  var firstUrl = O_O.firstUrl;
	  var nonPromise = O_O.nonPromise;
	  var dataForRender = O_O.dataForRender;
	  //const {secondResponseData} = O_O;

	  var dom_categoryNames = O_O.dom_categoryNames;
	  var dataLen = O_O.dataLen;

	  dataLen = data.length;

	  //console.log('dataLen: ', dataLen);
	  //console.log('dom_categoryNames: ', dom_categoryNames);

	  //update dataForRender
	  data.forEach(function (offer) {
	    dom_categoryNames.forEach(function (this_categoryName, index) {
	      //console.log('offer.eventId: ', offer.eventId);
	      if (offer.eventId == this_categoryName) {

	        dataForRender[index].push(offer);
	      }
	    });
	  });
	  //console.log('updated dataForRender: ', dataForRender);
	  //console.log('single req n render');
	  (0, _createHTML_by_categoryNames_singleReq2.default)(O_O, dataForRender);

	  //createHTML_by_categoryNames(O_O, updated_dataForRender_firstResponse(data, O_O));
	};

	exports.default = Use_firstResponseData;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _blazy = __webpack_require__(32);

	var _blazy2 = _interopRequireDefault(_blazy);

	var _MobPlatformCheck = __webpack_require__(33);

	var _MobPlatformCheck2 = _interopRequireDefault(_MobPlatformCheck);

	var _showAdditionalRatingOpts2 = __webpack_require__(34);

	var _showAdditionalRatingOpts3 = _interopRequireDefault(_showAdditionalRatingOpts2);

	var _fadeIn_active = __webpack_require__(41);

	var _fadeIn_active2 = _interopRequireDefault(_fadeIn_active);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	//import fadeOut_inactive from './fadeOut_inactive';

	function isISObject(obj) {
	  return obj && obj !== 'null' && obj !== 'undefined';
	}

	var _w_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var createHTML_by_categoryNames = function createHTML_by_categoryNames(O_O, dataForRender) {

	  //console.log('dataForRender: ', dataForRender);
	  var firstUrl = O_O.firstUrl;
	  var pogIdList_arr = O_O.pogIdList_arr;
	  var nonPromise = O_O.nonPromise;
	  var showSoldOut_g = O_O.showSoldOut_g;
	  var finalHTML = O_O.finalHTML;
	  var dom_categoryNames = O_O.dom_categoryNames;

	  dataForRender.forEach(function (this_innerArr, index, arr) {
	    if (!this_innerArr || this_innerArr.length <= 0) {
	      return;
	    } else {
	      (function () {
	        var categoryName = null;
	        var unit_HTML = void 0;
	        categoryName = this_innerArr[0].eventId;
	        unit_HTML = this_innerArr.map(function (item) {
	          //const soldOut = item.commonMinProductDetailsDTO.soldOut;

	          if (isLegit_pogId_item(item)) {
	            if (item.commonMinProductDetailsDTO.soldOut === true && showSoldOut_g !== true) {
	              //console.log('NOT SHOWING - soldOut items ~ pogId: ', item.pogId);
	              return;
	            }
	          }
	          if (categoryName.indexOf('bankOfferBannerX99') > -1) {
	            return _setHTML_BannerX99(item);
	          }
	          if (categoryName.indexOf('DealofDayOffers') > -1) {
	            return _setHTML_defaultOfferLiUnit(item);
	          }
	          if (categoryName.indexOf('superDod') > -1) {
	            return _setHTML_dodSuperDeals(item);
	          }
	        }).join('');
	        finalHTML[index].push(unit_HTML);
	      })();
	    }
	  });
	  if (nonPromise === true) {
	    //console.log('finalHTML: ', finalHTML);
	    finalHTML.forEach(function (e, i) {
	      var wrapper_dom = document.getElementById(dom_categoryNames[i]);
	      wrapper_dom.innerHTML = finalHTML[i].join('');
	    });

	    //run lazyLoad
	    setTimeout(function () {
	      var blazy = new _blazy2.default({
	        loadInvisible: true
	      });
	    }, 100);
	  } else {
	    myFastdomX99.mutate(function () {

	      finalHTML.forEach(function (e, i) {
	        var wrapper_dom = document.getElementById(dom_categoryNames[i]);
	        wrapper_dom.innerHTML = finalHTML[i].join('');
	      });
	    }).then(function () {
	      //run functions that require init after ajax success here
	      //fook
	      var blazy = new _blazy2.default({
	        loadInvisible: true
	      });
	      if (!(0, _MobPlatformCheck2.default)()) {//only on web
	        //_showAdditionalRatingOpts();
	      }
	    }).then(function () {
	      //fadeOut_inactive();
	      setTimeout(function () {
	        (0, _fadeIn_active2.default)();
	      }, 10);
	    }).catch(function (err) {
	      console.log('error in fastdom setHTML: ', err);
	    });
	  }
	  //template
	  //setHTML utils

	  //pre conditions prior to render
	  //pogId item
	  //priceSlab ~ item.extraField2
	  //sdPlus State ~ item.extraField3
	  function query_sdPlus_priceSlab(item) {
	    //console.log('query_sdPlus_priceSlab running. . .');
	    var userDefined_priceSlab = parseInt(item.extraField2);
	    var userDefined_sdPlus = item.extraField3;

	    if (isLegit_vendorDTO_item(item)) {
	      var price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
	      var sdPlus = item.commonMinProductDetailsDTO.vendorDTO.sdPlus;
	      if (userDefined_priceSlab && userDefined_sdPlus) {
	        if (!sdPlus || price > userDefined_priceSlab) {
	          return true;
	        } else {
	          return false;
	        }
	      } else if (userDefined_priceSlab) {
	        if (price > userDefined_priceSlab) {
	          return true;
	        }
	      } else if (userDefined_sdPlus) {
	        //console.log('item pogId:', item.pogId);
	        if (!sdPlus) {
	          return true;
	        }
	      } else {
	        return false;
	      }
	    }
	  }

	  function isLegit_pogId_item(item) {
	    if (isISObject(item.commonMinProductDetailsDTO) && isISObject(item.commonMinProductDetailsDTO.priceInfo)) {
	      return true;
	    } else {
	      return false;
	    }
	  }

	  function isLegit_vendorDTO_item(item) {
	    if (isLegit_pogId_item(item) && isISObject(item.commonMinProductDetailsDTO.vendorDTO)) {
	      return true;
	    } else {
	      return false;
	    }
	  }

	  //BannerX99
	  function _setHTML_BannerX99(item) {
	    return '<li class="invisX99 OfferUnitX99 BannerX99_unit responsiveFontSizeX99 pad06_vertical ">' + _setHTML_offerUnit_href(item) + _setHTML_offerStripUnit_offerImageOnly(item) + _setHTML_offerUnit_href_closing() + '</li>';
	  }

	  //defaultOfferLiUnit
	  function _setHTML_defaultOfferLiUnit(item) {
	    if (query_sdPlus_priceSlab(item)) {
	      return '';
	    }
	    return '<li class="invisX99 OfferUnitX99 OffersContentBoxLi ' + _setClassName_categoryName(item) + '" ' + _setID_pogId(item) + '>' + _setHTML_offerUnit_innerContWrap(item) + _set_SoldOUt_ModuleX99_mod(item) + _setHTML_offerUnit_href(item) + _setHTML_offerUnit_href_afterWrap() + _setHTML_offerUnit_offerImageOnly(item) + _setHTML_offerUnit_nonImgContWrap() + _setHTML_offerUnit_title(item) + _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) + _setHTML_offerUnit_ratingWrap(item) + _setHTML_wrap_saveAmt(item) + _setHTML_offerUnit_nonImgContWrap_closing() + _setHTML_offerUnit_href_afterWrap_closing() + _setHTML_offerUnit_href_closing() + _setHTML_offerUnit_innerContWrap_closing() + '</li>';
	  }

	  //dodSuperDeals
	  function _setHTML_dodSuperDeals(item) {
	    if (query_sdPlus_priceSlab(item)) {
	      return;
	    }
	    //console.log('setHTML_superDod running!');
	    return '<li class="invisX99 OfferUnitX99 dodSuperDeal_unit offerUnits_2_2 dodSuperDealUnit_ev' + _setClassName_categoryName(item) + '"' + _setID_pogId(item) + '>' + _setHTML_offerUnit_innerContWrap(item) + _set_SoldOUt_ModuleX99_mod(item) + _setHTML_offerUnit_href(item) + _setHTML_offerUnit_href_afterWrap() + _setHTML_offerUnit_offerImageOnly(item) + _setHTML_offerUnit_nonImgContWrap() + setHTML_wrapCenterCont() + setHTML_centeredContX() + _setHTML_offerUnit_title(item) + _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) + _setHTML_offerUnit_ratingWrap(item) + _setHTML_wrap_saveAmt(item) + setHTML_centeredContX_closing() + setHTML_wrapCenterCont_closing() + _setHTML_offerUnit_nonImgContWrap_closing() + _setHTML_offerUnit_href_afterWrap_closing() + _setHTML_offerUnit_href_closing(item) + _setHTML_offerUnit_innerContWrap_closing() + '</li>';
	  }

	  //setHTML frags
	  function setHTML_wrapCenterCont() {
	    return '<div class="wrapCenterCont">';
	  }

	  function setHTML_wrapCenterCont_closing() {
	    return '</div>';
	  }

	  function setHTML_centeredContX() {
	    return '<div class="centeredContX">';
	  }

	  function setHTML_centeredContX_closing() {
	    return '</div>';
	  }

	  function _setHTML_offerUnit_href(item) {
	    if (!item) {
	      return;
	    }
	    var aLink_Wrap = '<a target="_blank" href="' + item.webLandingUrl + '" class="offerUnit_href">';
	    if (item.webLandingUrl) {
	      return aLink_Wrap;
	    } else {
	      return '';
	    }
	  }

	  function _setHTML_offerUnit_imgWrapOnly(item) {
	    if (!item.offerName || item.offerName === null) {
	      item.offerName = 'Image';
	    }
	    var offerImageUrl = void 0;
	    if (isLegit_pogId_item(item)) {
	      offerImageUrl = item.commonMinProductDetailsDTO.imgs[0];
	    } else {
	      offerImageUrl = item.webOfferImageUrl;
	    }

	    /*
	    if(nonPromise === true){
	      return ('<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img nonLazyX99 OfferImg" src="' + offerImageUrl + '" alt="' + item.offerName + '" />' + '</div>');
	    }
	    else {
	      return ('<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' + '</div>');
	    }
	    */
	    return '<div class="offerUnit_imgWrapOnly">' + '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />' + '</div>';
	  }

	  function _setHTML_offerUnit_href_closing(item) {
	    return '</a>';
	  }

	  function _setHTML_offerUnit_innerContWrap(item) {
	    if (item.pogId && item.pogId !== '' || item.pogId !== null && item.pogId !== '') {
	      var i_pogId = 'i_' + item.pogId;
	      return '<div class="offerUnit_innerContWrap" id="' + i_pogId + '">';
	    } else {
	      return '<div class="offerUnit_innerContWrap ">';
	    }
	  }

	  function _setHTML_offerUnit_href_afterWrap() {
	    return '<div class="offerUnit_href_afterWrap">';
	  }

	  function _setHTML_offerUnit_href_afterWrap_closing() {
	    return '</div>';
	  }

	  //bankStrips, Banners
	  function _setHTML_offerStripUnit_offerImageOnly(item) {
	    if (!item.offerName || item.offerName === null) {
	      item.offerName = '';
	    }
	    var offerImageUrl = void 0,
	        userDefined_offerImageUrl = void 0;
	    if ((0, _MobPlatformCheck2.default)()) {
	      userDefined_offerImageUrl = item.mobileOfferImageUrl;
	    } else {
	      userDefined_offerImageUrl = item.webOfferImageUrl;
	    }
	    offerImageUrl = userDefined_offerImageUrl;
	    var blazy_img = '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />';
	    return '<div class="offerStripUnit_offerImageOnly">' + blazy_img + '</div>';
	  }

	  function _setHTML_offerUnit_offerImageOnly(item) {

	    if (!item.offerName || item.offerName === null) {
	      item.offerName = '';
	    }
	    var offerImageUrl = void 0,
	        userDefined_offerImageUrl = void 0,
	        sdgold = void 0;
	    if ((0, _MobPlatformCheck2.default)()) {
	      userDefined_offerImageUrl = item.mobileOfferImageUrl;
	    } else {
	      userDefined_offerImageUrl = item.webOfferImageUrl;
	    }

	    if (isLegit_pogId_item(item)) {
	      offerImageUrl = userDefined_offerImageUrl ? userDefined_offerImageUrl : item.commonMinProductDetailsDTO.imgs[0];
	      sdgold = item.commonMinProductDetailsDTO.vendorDTO.sdgold;
	    } else {
	      offerImageUrl = userDefined_offerImageUrl;
	    }
	    var sdPlusLogo = '<div class="offerUnit_sdPlusWrap_abs"></div>';
	    var blazy_img = '<img class="offerUnit_img OfferImg b-lazy" data-src="' + offerImageUrl + '" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="' + item.offerName + '" />';
	    var nonLazy_img = '<img class="offerUnit_img nonLazyX99 OfferImg"' + 'src="' + offerImageUrl + '" ' + 'alt="' + item.offerName + '" />';

	    if (sdgold) {
	      return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + blazy_img + '</div>';
	    } else {
	      return '<div class="offerUnit_imgWrap_sdPlusInc_rel">' + blazy_img + '</div>';
	    }
	    /*
	    if(nonPromise === true){
	      if(sdgold){
	        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + nonLazy_img + '</div>');
	      }
	      else {
	        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + nonLazy_img + '</div>');
	      }
	    }
	    else {
	      if(sdgold){
	        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + sdPlusLogo + blazy_img + '</div>');
	      }
	      else {
	        return ('<div class="offerUnit_imgWrap_sdPlusInc_rel">' + blazy_img + '</div>');
	      }
	    }
	    */
	  }

	  function _setHTML_offerUnit_nonImgContWrap() {
	    return '<div class="offerUnit_nonImgContWrap">';
	  }

	  function _setHTML_offerUnit_title(item) {
	    var title = void 0;
	    if (isLegit_pogId_item(item)) {
	      title = item.offerName ? item.offerName : item.commonMinProductDetailsDTO.title;
	    } else {
	      title = item.offerName;
	    }
	    return '<div class="offerUnit_title twoLine_TitleX99">' + title + '</div>';
	  }

	  function _set_SoldOUt_ModuleX99_mod(item) {
	    var soldOut_Wrap = '<div class="offerUnit_Soldout"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
	    var soldOut_Wrap_displayOn = '<div class="offerUnit_Soldout" style="display: block;"><div class="offerUnit_Soldout_btn">SOLD OUT</div></div>';
	    if (isLegit_pogId_item(item)) {
	      var soldOut = item.commonMinProductDetailsDTO.soldOut;
	      if (soldOut === true) {
	        //console.log('show soldOut item.pogId: ', item.pogId);
	        //var id_parent_offerUnit = item.pogId;
	        //var dom_id_parent_offerUnit = document.getElementById(id_parent_offerUnit);

	        if (showSoldOut_g === true) {
	          console.log('show soldOut. . .');
	          return soldOut_Wrap_displayOn;
	        } else {
	          //do not render soldOut
	          return '';
	        }
	      } else {
	        return '';
	      }
	    } else {
	      return '';
	    }
	  }

	  function _setHTML_offerUnit_priceTaglineDiscountWrap_rel(item) {

	    //const OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + _setHTML_discount(item) + '</div>';
	    var OfferDiscount_Wrap = '<div class="offerUnit_discountWrap">' + _setHTML_discount(item) + '</div>';
	    var offerUnit_priceTaglineWrap_rel = '<div class="offerUnit_priceTaglineWrap_rel">';
	    var offerUnit_priceTaglineWrap_rel_closing = '</div>';

	    function _setHTML_price_mrp(item) {
	      var price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
	      var mrp = item.commonMinProductDetailsDTO.priceInfo.mrp;
	      var price_mrp_price_frags = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_price">Rs. ' + mrp + '</span>' + '<span class="offerUnit_displayPrice">Rs. ' + price + '</span></span>' + '</div>';
	      var price_only_frags = '<div class="offerUnit_priceWrap"><span class="offerUnit_priceWrapAll"><span class="offerUnit_displayPrice">Rs. ' + price + '</span></span>' + '</div>';

	      if (price == mrp) {
	        return price_only_frags;
	      } else {
	        return price_mrp_price_frags;
	      }
	    }

	    function _setHTML_discount(item) {
	      //console.log('_setHTML_discount runnng. . .');
	      if (!isLegit_pogId_item(item)) {
	        return '';
	      } else {
	        //console.log('legit pogId item. . .');
	        var discount = item.commonMinProductDetailsDTO.priceInfo.discount;
	        //console.log('typeof discount: ', typeof discount);
	        if (!discount || discount === null || discount === 0) {
	          //console.log('discount not defined. . .');
	          return '';
	        } else {
	          //console.log('discount: ', discount);
	          var offerUnit_discount = '<div class="offerUnit_discount">' + discount + '% Off </div>';

	          if (discount > 10) {
	            //return offerUnit_discount;
	            return offerUnit_discount;
	          } else {
	            return '';
	          }
	        }
	      }
	    }

	    function _setHTML_tagline(item) {
	      var tagline = item.extraField1;
	      var tagLineFragments = '<div class="offerUnit_taglineWrap"><div class="offerUnit_tagline">' + tagline + '</div></div>';
	      return tagLineFragments;
	    }

	    if (isLegit_pogId_item(item)) {
	      //price & discount
	      return offerUnit_priceTaglineWrap_rel + _setHTML_price_mrp(item) + OfferDiscount_Wrap + offerUnit_priceTaglineWrap_rel_closing;
	    } else {
	      //tagLine
	      return offerUnit_priceTaglineWrap_rel + _setHTML_tagline(item) + offerUnit_priceTaglineWrap_rel_closing;
	    }
	  }

	  function _setHTML_offerUnit_ratingWrap(item) {
	    //console.log('_setHTML_offerUnit_ratingWrap running. . .');
	    var rating_Wrap = '<div class="offerUnit_ratingWrap" ' + _setDataPogId_rating(item) + '>';
	    if (!isLegit_pogId_item(item)) {
	      return rating_Wrap + '</div>';
	    } else {
	      return setHTML_avgRating_noOfreviews(item);
	    }

	    function setHTML_ratingFrags(avgRating_val) {
	      return '<div class="offerUnit_rating_rel">' + '<div class="ratingBG_disabled"></div>' + '<div class="ratingBG_active" style="width:' + avgRating_val + 'px;"></div></div>';
	    }

	    function setHTML_noOfReviewsFrags(noOfReviews) {
	      return '<span class="numberRevsX">(' + noOfReviews + ')</span>';
	    }

	    function setHTML_avgRating_noOfreviews(item) {
	      if (item.commonMinProductDetailsDTO.avgRating == 'undefined' || !item.commonMinProductDetailsDTO.avgRating) {
	        return rating_Wrap + '</div>';
	      }

	      if (item.commonMinProductDetailsDTO.avgRating) {
	        var avgRating = item.commonMinProductDetailsDTO.avgRating;
	        var avgRating_val = setRating(avgRating);
	        //console.log('avgRating_val: ', avgRating_val);
	        if (item.commonMinProductDetailsDTO.noOfreviews) {
	          var noOfReviews = item.commonMinProductDetailsDTO.noOfreviews;
	          //console.log('noOfReviews: ' + noOfReviews);
	          return rating_Wrap + _setHTML_toolTipAddlRating() + setHTML_ratingFrags(avgRating_val) + setHTML_noOfReviewsFrags(noOfReviews) + '</div>';
	        }
	        return rating_Wrap + _setHTML_toolTipAddlRating() + setHTML_ratingFrags(avgRating_val) + '</div>';
	      } else {
	        return rating_Wrap + '</div>';
	      }
	    }

	    function setRating(rating) {
	      //console.log('setRating is running . . .');
	      var val = rating,
	          val_Stringed = val.toString(),
	          widthFactor = 0,
	          width = 70;
	      if (val < 1 || val > 5) {
	        return false;
	      }
	      widthFactor = val_Stringed / 5 * 100 / 100 * width;
	      widthFactor = Math.round(widthFactor * 10) / 10;
	      return widthFactor;
	    }
	  }

	  function _setHTML_wrap_saveAmt(item) {

	    var wrap_saveAmt = '<div class="wrap_saveAmt">';
	    var wrap_saveAmt_closing = '</div>';

	    if (!isLegit_pogId_item(item)) {
	      return wrap_saveAmt + wrap_saveAmt_closing;
	    }

	    var price = void 0,
	        mrp = void 0;

	    if (item.commonMinProductDetailsDTO.priceInfo.finalPrice) {
	      price = item.commonMinProductDetailsDTO.priceInfo.finalPrice;
	    }
	    if (item.commonMinProductDetailsDTO.priceInfo.mrp) {
	      mrp = item.commonMinProductDetailsDTO.priceInfo.mrp;
	    }

	    if (price && mrp && price < mrp) {
	      var saveAmt = mrp - price;
	      return wrap_saveAmt + 'You save Rs. ' + '<span>' + saveAmt + '</span>' + wrap_saveAmt_closing;
	    } else {
	      return wrap_saveAmt + wrap_saveAmt_closing;
	    }
	  }

	  function _setHTML_offerUnit_nonImgContWrap_closing() {
	    return '</div>';
	  }

	  function _setHTML_offerUnit_innerContWrap_closing() {
	    return '</div>';
	  }

	  function _setClassName_categoryName(item) {
	    if (item.extraField1) {
	      return item.extraField1;
	    } else {
	      return '';
	    }
	  }

	  function _setID_pogId(item) {

	    if (item.pogId === null || !item.pogId) {

	      return '';
	    } else if (item.pogId) {

	      return 'id="' + item.pogId + '"';
	    } else {
	      return '';
	    }
	  }

	  function _setDataPogId_rating(item) {
	    //console.log('_setDataPogId_rating running. . .');
	    if (item.pogId === null || !item.pogId) {

	      return '';
	    } else if (item.pogId) {

	      return 'data-pogId="' + item.pogId + '"';
	    } else {
	      return '';
	    }
	  }

	  function _setHTML_toolTipAddlRating() {
	    return '<div class="toolTip-box-outer sdTooltipWrapper col-lg-15 col-md-19 col-xs-15 infodata" ><div class="loadingX99_wrapper"><div class="loadingX99"></div></div></div>';
	  }
	};

	exports.default = createHTML_by_categoryNames;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
	  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
	  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
	*/
	;
	(function(root, blazy) {
	    if (true) {
	        // AMD. Register bLazy as an anonymous module
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (blazy), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node.
	        module.exports = blazy();
	    } else {
	        // Browser globals. Register bLazy on window
	        root.Blazy = blazy();
	    }
	})(this, function() {
	    'use strict';

	    //private vars
	    var _source, _viewport, _isRetina, _supportClosest, _attrSrc = 'src', _attrSrcset = 'srcset';

	    // constructor
	    return function Blazy(options) {
	        //IE7- fallback for missing querySelectorAll support
	        if (!document.querySelectorAll) {
	            var s = document.createStyleSheet();
	            document.querySelectorAll = function(r, c, i, j, a) {
	                a = document.all, c = [], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
	                for (i = r.length; i--;) {
	                    s.addRule(r[i], 'k:v');
	                    for (j = a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
	                    s.removeRule(0);
	                }
	                return c;
	            };
	        }

	        //options and helper vars
	        var scope = this;
	        var util = scope._util = {};
	        util.elements = [];
	        util.destroyed = true;
	        scope.options = options || {};
	        scope.options.error = scope.options.error || false;
	        scope.options.offset = scope.options.offset || 100;
	        scope.options.root = scope.options.root || document;
	        scope.options.success = scope.options.success || false;
	        scope.options.selector = scope.options.selector || '.b-lazy';
	        scope.options.separator = scope.options.separator || '|';
	        scope.options.containerClass = scope.options.container;
	        scope.options.container = scope.options.containerClass ? document.querySelectorAll(scope.options.containerClass) : false;
	        scope.options.errorClass = scope.options.errorClass || 'b-error';
	        scope.options.breakpoints = scope.options.breakpoints || false;
	        scope.options.loadInvisible = scope.options.loadInvisible || false;
	        scope.options.successClass = scope.options.successClass || 'b-loaded';
	        scope.options.validateDelay = scope.options.validateDelay || 25;
	        scope.options.saveViewportOffsetDelay = scope.options.saveViewportOffsetDelay || 50;
	        scope.options.srcset = scope.options.srcset || 'data-srcset';
	        scope.options.src = _source = scope.options.src || 'data-src';
	        _supportClosest = Element.prototype.closest;
	        _isRetina = window.devicePixelRatio > 1;
	        _viewport = {};
	        _viewport.top = 0 - scope.options.offset;
	        _viewport.left = 0 - scope.options.offset;


	        /* public functions
	         ************************************/
	        scope.revalidate = function() {
	            initialize(scope);
	        };
	        scope.load = function(elements, force) {
	            var opt = this.options;
	            if (elements && elements.length === undefined) {
	                loadElement(elements, force, opt);
	            } else {
	                each(elements, function(element) {
	                    loadElement(element, force, opt);
	                });
	            }
	        };
	        scope.destroy = function() {            
	            var util = scope._util;
	            if (scope.options.container) {
	                each(scope.options.container, function(object) {
	                    unbindEvent(object, 'scroll', util.validateT);
	                });
	            }
	            unbindEvent(window, 'scroll', util.validateT);
	            unbindEvent(window, 'resize', util.validateT);
	            unbindEvent(window, 'resize', util.saveViewportOffsetT);
	            util.count = 0;
	            util.elements.length = 0;
	            util.destroyed = true;
	        };

	        //throttle, ensures that we don't call the functions too often
	        util.validateT = throttle(function() {
	            validate(scope);
	        }, scope.options.validateDelay, scope);
	        util.saveViewportOffsetT = throttle(function() {
	            saveViewportOffset(scope.options.offset);
	        }, scope.options.saveViewportOffsetDelay, scope);
	        saveViewportOffset(scope.options.offset);

	        //handle multi-served image src (obsolete)
	        each(scope.options.breakpoints, function(object) {
	            if (object.width >= window.screen.width) {
	                _source = object.src;
	                return false;
	            }
	        });

	        // start lazy load
	        setTimeout(function() {
	            initialize(scope);
	        }); // "dom ready" fix

	    };


	    /* Private helper functions
	     ************************************/
	    function initialize(self) {
	        var util = self._util;
	        // First we create an array of elements to lazy load
	        util.elements = toArray(self.options);
	        util.count = util.elements.length;
	        // Then we bind resize and scroll events if not already binded
	        if (util.destroyed) {
	            util.destroyed = false;
	            if (self.options.container) {
	                each(self.options.container, function(object) {
	                    bindEvent(object, 'scroll', util.validateT);
	                });
	            }
	            bindEvent(window, 'resize', util.saveViewportOffsetT);
	            bindEvent(window, 'resize', util.validateT);
	            bindEvent(window, 'scroll', util.validateT);
	        }
	        // And finally, we start to lazy load.
	        validate(self);
	    }

	    function validate(self) {
	        var util = self._util;
	        for (var i = 0; i < util.count; i++) {
	            var element = util.elements[i];
	            if (elementInView(element, self.options) || hasClass(element, self.options.successClass)) {
	                self.load(element);
	                util.elements.splice(i, 1);
	                util.count--;
	                i--;
	            }
	        }
	        if (util.count === 0) {
	            self.destroy();
	        }
	    }

	    function elementInView(ele, options) {
	        var rect = ele.getBoundingClientRect();

	        if(options.container && _supportClosest){
	            // Is element inside a container?
	            var elementContainer = ele.closest(options.containerClass);
	            if(elementContainer){
	                var containerRect = elementContainer.getBoundingClientRect();
	                // Is container in view?
	                if(inView(containerRect, _viewport)){
	                    var top = containerRect.top - options.offset;
	                    var right = containerRect.right + options.offset;
	                    var bottom = containerRect.bottom + options.offset;
	                    var left = containerRect.left - options.offset;
	                    var containerRectWithOffset = {
	                        top: top > _viewport.top ? top : _viewport.top,
	                        right: right < _viewport.right ? right : _viewport.right,
	                        bottom: bottom < _viewport.bottom ? bottom : _viewport.bottom,
	                        left: left > _viewport.left ? left : _viewport.left
	                    };
	                    // Is element in view of container?
	                    return inView(rect, containerRectWithOffset);
	                } else {
	                    return false;
	                }
	            }
	        }      
	        return inView(rect, _viewport);
	    }

	    function inView(rect, viewport){
	        // Intersection
	        return rect.right >= viewport.left &&
	               rect.bottom >= viewport.top && 
	               rect.left <= viewport.right && 
	               rect.top <= viewport.bottom;
	    }

	    function loadElement(ele, force, options) {
	        // if element is visible, not loaded or forced
	        if (!hasClass(ele, options.successClass) && (force || options.loadInvisible || (ele.offsetWidth > 0 && ele.offsetHeight > 0))) {
	            var dataSrc = getAttr(ele, _source) || getAttr(ele, options.src); // fallback to default 'data-src'
	            if (dataSrc) {
	                var dataSrcSplitted = dataSrc.split(options.separator);
	                var src = dataSrcSplitted[_isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
	                var srcset = getAttr(ele, options.srcset);
	                var isImage = equal(ele, 'img');
	                var parent = ele.parentNode;
	                var isPicture = parent && equal(parent, 'picture');
	                // Image or background image
	                if (isImage || ele.src === undefined) {
	                    var img = new Image();
	                    // using EventListener instead of onerror and onload
	                    // due to bug introduced in chrome v50 
	                    // (https://productforums.google.com/forum/#!topic/chrome/p51Lk7vnP2o)
	                    var onErrorHandler = function() {
	                        if (options.error) options.error(ele, "invalid");
	                        addClass(ele, options.errorClass);
	                        unbindEvent(img, 'error', onErrorHandler);
	                        unbindEvent(img, 'load', onLoadHandler);
	                    };
	                    var onLoadHandler = function() {
	                        // Is element an image
	                        if (isImage) {
	                            if(!isPicture) {
	                                handleSources(ele, src, srcset);
	                            }
	                        // or background-image
	                        } else {
	                            ele.style.backgroundImage = 'url("' + src + '")';
	                        }
	                        itemLoaded(ele, options);
	                        unbindEvent(img, 'load', onLoadHandler);
	                        unbindEvent(img, 'error', onErrorHandler);
	                    };
	                    
	                    // Picture element
	                    if (isPicture) {
	                        img = ele; // Image tag inside picture element wont get preloaded
	                        each(parent.getElementsByTagName('source'), function(source) {
	                            handleSource(source, _attrSrcset, options.srcset);
	                        });
	                    }
	                    bindEvent(img, 'error', onErrorHandler);
	                    bindEvent(img, 'load', onLoadHandler);
	                    handleSources(img, src, srcset); // Preload

	                } else { // An item with src like iframe, unity games, simpel video etc
	                    ele.src = src;
	                    itemLoaded(ele, options);
	                }
	            } else {
	                // video with child source
	                if (equal(ele, 'video')) {
	                    each(ele.getElementsByTagName('source'), function(source) {
	                        handleSource(source, _attrSrc, options.src);
	                    });
	                    ele.load();
	                    itemLoaded(ele, options);
	                } else {
	                    if (options.error) options.error(ele, "missing");
	                    addClass(ele, options.errorClass);
	                }
	            }
	        }
	    }

	    function itemLoaded(ele, options) {
	        addClass(ele, options.successClass);
	        if (options.success) options.success(ele);
	        // cleanup markup, remove data source attributes
	        removeAttr(ele, options.src);
	        removeAttr(ele, options.srcset);
	        each(options.breakpoints, function(object) {
	            removeAttr(ele, object.src);
	        });
	    }

	    function handleSource(ele, attr, dataAttr) {
	        var dataSrc = getAttr(ele, dataAttr);
	        if (dataSrc) {
	            setAttr(ele, attr, dataSrc);
	            removeAttr(ele, dataAttr);
	        }
	    }

	    function handleSources(ele, src, srcset){
	        if(srcset) {
	            setAttr(ele, _attrSrcset, srcset); //srcset
	        }
	        ele.src = src; //src 
	    }

	    function setAttr(ele, attr, value){
	        ele.setAttribute(attr, value);
	    }

	    function getAttr(ele, attr) {
	        return ele.getAttribute(attr);
	    }

	    function removeAttr(ele, attr){
	        ele.removeAttribute(attr); 
	    }

	    function equal(ele, str) {
	        return ele.nodeName.toLowerCase() === str;
	    }

	    function hasClass(ele, className) {
	        return (' ' + ele.className + ' ').indexOf(' ' + className + ' ') !== -1;
	    }

	    function addClass(ele, className) {
	        if (!hasClass(ele, className)) {
	            ele.className += ' ' + className;
	        }
	    }

	    function toArray(options) {
	        var array = [];
	        var nodelist = (options.root).querySelectorAll(options.selector);
	        for (var i = nodelist.length; i--; array.unshift(nodelist[i])) {}
	        return array;
	    }

	    function saveViewportOffset(offset) {
	        _viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + offset;
	        _viewport.right = (window.innerWidth || document.documentElement.clientWidth) + offset;
	    }

	    function bindEvent(ele, type, fn) {
	        if (ele.attachEvent) {
	            ele.attachEvent && ele.attachEvent('on' + type, fn);
	        } else {
	            ele.addEventListener(type, fn, { capture: false, passive: true });
	        }
	    }

	    function unbindEvent(ele, type, fn) {
	        if (ele.detachEvent) {
	            ele.detachEvent && ele.detachEvent('on' + type, fn);
	        } else {
	            ele.removeEventListener(type, fn, { capture: false, passive: true });
	        }
	    }

	    function each(object, fn) {
	        if (object && fn) {
	            var l = object.length;
	            for (var i = 0; i < l && fn(object[i], i) !== false; i++) {}
	        }
	    }

	    function throttle(fn, minDelay, scope) {
	        var lastCall = 0;
	        return function() {
	            var now = +new Date();
	            if (now - lastCall < minDelay) {
	                return;
	            }
	            lastCall = now;
	            fn.apply(scope, arguments);
	        };
	    }
	});


/***/ },
/* 33 */
/***/ function(module, exports) {

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

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _axios = __webpack_require__(2);

	var _axios2 = _interopRequireDefault(_axios);

	var _MobPlatformCheck = __webpack_require__(33);

	var _MobPlatformCheck2 = _interopRequireDefault(_MobPlatformCheck);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	//_showAdditionalRatingOpts
	function _showAdditionalRatingOpts() {
	  if ((0, _MobPlatformCheck2.default)()) {
	    return;
	  }
	  var _offerUnit_ratingWrap = document.getElementsByClassName('offerUnit_ratingWrap');
	  //console.log('imported _showAdditionalRatingOpts running. . .');
	  for (var i = 0; i < _offerUnit_ratingWrap.length; i++) {
	    var this_offerUnit_ratingWrap = _offerUnit_ratingWrap[i];
	    //console.log('this_offerUnit_ratingWrap: ', this_offerUnit_ratingWrap);
	    this_offerUnit_ratingWrap.addEventListener('mouseenter', function () {
	      var _this = this;
	      var pogId = _this.getAttribute('data-pogId');
	      var _target = _this.querySelector('.infodata');
	      if (_target) {
	        _target.classList.add('loading');
	        _getAdditionalRatingOpts(pogId, _target);
	        _target.style.display = 'block';
	      }
	      //localTestOnly
	      /*
	      var _target = _this.querySelector('.infodata');
	      if (_target) {
	          _target.innerHTML = _fakeServerApi();
	          _target.style.display = 'block';
	      }
	      */
	    });
	    this_offerUnit_ratingWrap.addEventListener('mouseleave', function () {
	      var _this = this;
	      var _target = _this.querySelector('.infodata');
	      if (_target) {
	        _target.style.display = 'none';
	      }
	    });
	  }
	}

	function _fakeServerApi() {
	  console.log('_fakeServerApi running. . .');
	  var _fakeData = '<div class="product_infogram"> <div class="rating-info col-xs-9"> <div class="ratetxt"> <span>3.6</span> <small class="LTgray">Out of 5</small> <div class="av-rating"> <div class="rating-stars"> <div class="grey-stars"></div> <div class="filled-stars" style="width:72.0%"></div> </div> </div> </div> </div> <div class="rating-histogram col-xs-12"> <div class="text"> <span itemprop="ratingCount" class="hidden">413</span> <h5 class="rating-histogram-header">Based on <span class="reviewCacheUpdate">413 ratings</span></h5> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,5,\'default\');" title="Read 15 reviews for 5-star ratings"> <span class="lfloat">5 Star</span> <span class="barover review-bar xola" style="width:105.00000000000001px"></span> <span>151</span> </span> </div> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,4,\'default\');" title="Read 13 reviews for 4-star ratings"> <span class="lfloat">4 Star</span> <span class="barover review-bar xola" style="width:83.14569536423842px"></span> <span>118</span> </span> </div> <div class="row" style="cursor:default" title="No reviews for 3-star ratings"> <span class="lfloat">3 Star</span> <span class="barover review-bar xola" style="width:45.397350993377486px"></span> <span>61</span> </div> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,2,\'default\');" title="Read 1 reviews for 2-star ratings"> <span class="lfloat">2 Star</span> <span class="barover review-bar xola" style="width:12.94701986754967px"></span> <span>12</span> </span> </div> <div class="row reviews-true"> <span id="ratings-wrapper" class="js-pdp-nav-sec" data-link-nav="#defRevPDP" source="infogram" onclick="Snapdeal.pdpReview.displayReviewsWithRatingFilter(this,1,\'default\');" title="Read 3 reviews for 1-star ratings"> <span class="lfloat">1 Star</span> <span class="barover review-bar xola" style="width:52.01986754966888px"></span> <span>71</span> </span> </div> </div> </div> <div class="clear"></div></div>';
	  return _fakeData;
	}

	function _getAdditionalRatingOpts(pogId, _target) {
	  var url = '/review/stats/' + pogId;
	  var _url = 'https://www.snapdeal.com/review/stats/' + pogId;
	  _axios2.default.get(_url).then(function (response) {
	    var data = response.data;
	    console.log('_getAdditionalRatingOpts data: ', data);
	    _target.innerHTML = data;
	  }).catch(function (err) {
	    console.log('err in axios _getAdditionalRatingOpts req: ', err);
	  });
	}

	exports.default = _showAdditionalRatingOpts;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _MobPlatformCheck = __webpack_require__(33);

	var _MobPlatformCheck2 = _interopRequireDefault(_MobPlatformCheck);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var SocialShare_page = function () {
	    var mainWrapperX99 = document.getElementsByClassName('shareX99_wrapper')[0];
	    if (!mainWrapperX99) {
	        console.log('.shareX99_wrapper not found');return;
	    }
	    var ele = mainWrapperX99.querySelectorAll('.shareIconX_icoWrapper li');
	    if (!ele) {
	        console.log('.shareIconX_icoWrapper not found');return;
	    }
	    var whatsappX = mainWrapperX99.querySelector('li.whatsappX');
	    //check if mobile and show/hide whatsapp
	    var mobileSite_TrueX999_var = (0, _MobPlatformCheck2.default)();
	    //console.log('mobileSite_running: ' + mobileSite_TrueX999_var);
	    if (mobileSite_TrueX999_var) {
	        //console.log('mobile site running, show whatsapp');
	        if (whatsappX) {
	            whatsappX.style.display = 'block';
	        }
	    } else {
	        if (whatsappX) {
	            whatsappX.style.display = 'none';
	        }
	    }
	    //var links
	    var currURLX = window.location.href;
	    var preURLs = {
	        'facebookX': 'https://www.facebook.com/sharer.php?u=',
	        'twitterX': 'https://twitter.com/intent/tweet?url=',
	        'googleplusX': 'https://plus.google.com/share?url=',
	        'pinterestX': 'https://pinterest.com/pin/create/bookmarklet/?url=',
	        'whatsappX': 'whatsapp://send?text='
	    };
	    var finalURL = '';
	    var data_hashtag = 'data-hashtag';
	    var class_unit_socialX99 = 'unit_socialX99';
	    //click events
	    for (var i = 0; i < ele.length; i++) {
	        ele[i].addEventListener('click', function (e) {
	            e.preventDefault();
	            var finalURL = '',
	                ele = e.target;
	            ele = getClick_targetClass_elem(e.target, class_unit_socialX99);
	            if (!ele || ele === null) {
	                console.log('clicked_targetClass_elem not found!');
	                return;
	            }
	            var twHastag = ele.getAttribute(data_hashtag);
	            if (ele.classList.contains('facebookX')) {
	                finalURL = preURLs.facebookX + currURLX;
	            } else if (ele.classList.contains('twitterX')) {
	                if (twHastag) {
	                    finalURL = preURLs.twitterX + currURLX + '&hashtags=' + twHastag;
	                } else {
	                    finalURL = preURLs.twitterX + currURLX;
	                }
	            } else if (ele.classList.contains('googleplusX')) {
	                finalURL = preURLs.googleplusX + currURLX;
	            } else if (ele.classList.contains('pinterestX')) {
	                finalURL = preURLs.pinterestX + currURLX;
	            } else if (ele.classList.contains('whatsappX')) {
	                finalURL = preURLs.whatsappX + currURLX;
	            }
	            console.log('finalURL: ', finalURL);
	            var W_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	            var W_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	            window.open(finalURL, 'shareWindow', 'height=450, width=550, top=' + (W_height / 2 - 275) + ', left=' + (W_width / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	            //end of click event
	        });
	        //end of for loop
	        //utils
	    }

	    function getClick_targetClass_elem(elem, targetClass) {
	        if (elem.classList.contains(targetClass)) {
	            return elem;
	        } else {
	            return findParentWithClassX99(elem, targetClass);
	        }
	    }

	    function findParentWithClassX99(el, cls) {
	        while ((el = el.parentElement) && !el.classList.contains(cls)) {}
	        return el;
	    }
	}();

	exports.default = SocialShare_page;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var TimerX99 = function () {
	  function TimerX99(opts) {
	    _classCallCheck(this, TimerX99);

	    if (!opts) {
	      opts = {};
	    }
	    this.ID = opts.ID ? opts.ID : '';
	    this.startTime = opts.startTime ? opts.startTime : '';
	    this.endTime = opts.endTime ? opts.endTime : '';
	    this.callback = opts.callback ? opts.callback : '';
	  }

	  _createClass(TimerX99, [{
	    key: 'init',
	    value: function init() {
	      //validate options
	      console.log('init TimerX99');
	      this.ID = this.ID ? this.ID : log_UndefinedAndReturn('ID');
	      this.startTime = this.startTime ? this.startTime : log_UndefinedAndReturn('startTime');
	      this.endTime = this.endTime ? this.endTime : log_UndefinedAndReturn('endTime');
	      this.callback = this.callback ? this.callback : log_UndefinedAndReturn('callback');
	      if (!isValidDate(this.startTime)) {
	        console.log('invalid startTime date format, it must be MM/DD/YYYY');
	        return;
	      }
	      if (!isValidDate(this.endTime)) {
	        console.log('invalid endTime date format, it must be MM/DD/YYYY');
	        return;
	      }

	      //cache options
	      var ID = this.ID;
	      var dom_ID = document.getElementById(ID);
	      if (!dom_ID) {
	        console.log('TimerX99: element with ID not found');
	        return;
	      }
	      var startTime = this.startTime;
	      var endTime = this.endTime;
	      var callback = this.callback;

	      //CheckStartTimer
	      CheckStartTimer(ID, startTime, endTime, callback);

	      function StartTimer(ID, startTime, endTime, callback) {
	        //dom queries
	        var dom_ID = document.getElementById(ID);
	        var dayV_Wrap = dom_ID.querySelector('.dayV_timerX');
	        var hrV_Wrap = dom_ID.querySelector('.hrV_timerX');
	        var minV_Wrap = dom_ID.querySelector('.minV_timerX');
	        var secV_Wrap = dom_ID.querySelector('.secV_timerX');
	        RunningTimer();
	        function RunningTimer() {
	          updateClock();
	          var timeInterval = setInterval(updateClock, 1000);

	          function updateClock() {
	            var t = getRemainingTime(endTime);
	            dayV_Wrap.innerHTML = ('0' + t.days).slice(-2);
	            hrV_Wrap.innerHTML = ('0' + t.hours).slice(-2);
	            minV_Wrap.innerHTML = ('0' + t.minutes).slice(-2);
	            secV_Wrap.innerHTML = ('0' + t.seconds).slice(-2);
	            if (t.total <= 0) {
	              clearInterval(timeInterval);
	              console.log('timer was completed. . .');
	              window.location.reload(true);
	            }
	          }
	        }
	      }

	      function CheckStartTimer(ID, startTime, endTime, callback) {
	        var _startTime = startTime + ' GMT+0530';
	        var _endTime = endTime + ' GMT+0530';
	        var _startTime_ms = new Date(_startTime);
	        var _endTime_ms = new Date(_endTime);
	        var currTime_ms = new Date();
	        if (_startTime_ms > _endTime_ms) {
	          console.log('error in startDate, startDate is more than end Date');
	        }
	        if (_endTime_ms > currTime_ms && currTime_ms >= _startTime_ms) {
	          StartTimer(ID, startTime, endTime, callback);
	          if (callback) {
	            if (!isFunction(callback)) {
	              console.log('callback must be a function declaration like this:' + '\n' + 'function (){ //do something }');
	              return;
	            } else {
	              console.log('running callback:');
	              callback();
	            }
	          }
	        }
	      }

	      function getRemainingTime(endTime) {
	        var t = Date.parse(endTime) - Date.parse(new Date());
	        var seconds = Math.floor(t / 1000 % 60);
	        var minutes = Math.floor(t / 1000 / 60 % 60);
	        var hours = Math.floor(t / (1000 * 60 * 60) % 24);
	        var days = Math.floor(t / (1000 * 60 * 60 * 24));
	        return {
	          'total': t,
	          'days': days,
	          'hours': hours,
	          'minutes': minutes,
	          'seconds': seconds
	        };
	      }
	    }
	  }, {
	    key: 'get_settings',
	    value: function get_settings() {
	      console.log('GET PROPS PLEASE: ');
	      console.log('ID: ', this.ID);
	      console.log('startTime: ', this.startTime);
	      console.log('endTime: ', this.endTime);
	      console.log('callback: ', this.callback);
	      return {
	        id: this.ID,
	        startTime: this.startTime,
	        endTime: this.endTime,
	        callback: this.callback
	      };
	    }
	  }]);

	  return TimerX99;
	}();

	//global helper util fns


	function log_UndefinedAndReturn(prop) {
	  console.log(String(prop) + ' was not defined');
	  if (prop == 'callback') {
	    console.log('you can define a callback. . .');
	  } else {
	    return;
	  }
	}

	function isFunction(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}

	function isValidDate(date) {
	  var d = date;
	  var i_fSpace = d.indexOf(' ');
	  var data_str = d.substr(0, i_fSpace);
	  var matches = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/.exec(data_str);
	  if (matches === null) return false;
	  var d_ = matches[2];
	  var m = matches[1] - 1;
	  var y = matches[3];
	  var composedDate = new Date(y, m, d_);
	  return composedDate.getDate() == d_ && composedDate.getMonth() == m && composedDate.getFullYear() == y;
	}

	function findParent_firstMatchClassName(el, className) {
	  while (el.parentNode) {
	    el = el.parentNode;
	    if (el.className === className) return el;
	  }
	  return null;
	}

	function Init_liveTimerOffers(data, tag) {
	  var liveTimerOffer_opts = get_liveTimerOffer_opts(data, tag);
	  start_liveTimerOffer(liveTimerOffer_opts);

	  function get_liveTimerOffer_opts(data, tag) {
	    var liveTimerOffer_opts = [];
	    data.forEach(function (offer, index) {
	      if (offer.categoryName.indexOf(tag) > -1) {
	        var startTimeHrs = ('0' + offer.startTimeHrs).slice(-2);
	        var startTimeMin = ('0' + offer.startTimeMin).slice(-2);
	        var endTimeHrs = ('0' + offer.endTimeHrs).slice(-2);
	        var endTimeMin = ('0' + offer.endTimeMin).slice(-2);
	        var startTime = getFullDate() + ' ' + startTimeHrs + ':' + startTimeMin + ':00';
	        var endTime = getFullDate() + ' ' + endTimeHrs + ':' + endTimeMin + ':00';
	        var timerOptions = {};
	        timerOptions.categoryName = offer.categoryName;
	        timerOptions.startTime = startTime;
	        timerOptions.endTime = endTime;
	        liveTimerOffer_opts.push(timerOptions);
	      }
	    });
	    return liveTimerOffer_opts;
	  }

	  function start_liveTimerOffer(get_liveTimerOffer_opts) {
	    get_liveTimerOffer_opts.forEach(function (timerObj, i) {
	      var newTimerName = '';
	      newTimerName = timerObj.categoryName + '_timer';
	      var _newTimerName = newTimerName;
	      newTimerName = new TimerX99({
	        ID: newTimerName,
	        startTime: timerObj.startTime,
	        endTime: timerObj.endTime,
	        callback: function callback() {
	          console.log(_newTimerName + ' is running');
	        }
	      });
	      newTimerName.init();
	    });
	  }

	  function getFullDate() {
	    var _d = new Date();
	    var date_today = _d.getDate();
	    date_today = ('0' + date_today).slice(-2);
	    var month_today = _d.getMonth() + 1;
	    month_today = ('0' + month_today).slice(-2);
	    var year_today = _d.getFullYear();
	    var today_mmddyyyy = month_today + '/' + date_today + '/' + year_today;
	    return today_mmddyyyy;
	  }
	}

	exports.default = TimerX99;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.0.5
	 */

	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';

	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}

	function isFunction(x) {
	  return typeof x === 'function';
	}

	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}

	var isArray = _isArray;

	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;

	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};

	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}

	function setAsap(asapFn) {
	  asap = asapFn;
	}

	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}

	// vertx
	function useVertxTimer() {
	  if (typeof vertxNext !== 'undefined') {
	    return function () {
	      vertxNext(flush);
	    };
	  }

	  return useSetTimeout();
	}

	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });

	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}

	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}

	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}

	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];

	    callback(arg);

	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }

	  len = 0;
	}

	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(38);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}

	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}

	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;

	  var parent = this;

	  var child = new this.constructor(noop);

	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }

	  var _state = parent._state;

	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }

	  return child;
	}

	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.resolve(1);

	  promise.then(function(value){
	    // value === 1
	  });
	  ```

	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }

	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}

	var PROMISE_ID = Math.random().toString(36).substring(16);

	function noop() {}

	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var GET_THEN_ERROR = new ErrorObject();

	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}

	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}

	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}

	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}

	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;

	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));

	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}

	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}

	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}

	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}

	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }

	  publish(promise);
	}

	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }

	  promise._result = value;
	  promise._state = FULFILLED;

	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}

	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;

	  asap(publishRejection, promise);
	}

	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;

	  parent._onerror = null;

	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;

	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}

	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;

	  if (subscribers.length === 0) {
	    return;
	  }

	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;

	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];

	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }

	  promise._subscribers.length = 0;
	}

	function ErrorObject() {
	  this.error = null;
	}

	var TRY_CATCH_ERROR = new ErrorObject();

	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}

	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;

	  if (hasCallback) {
	    value = tryCatch(callback, detail);

	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }

	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }

	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}

	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}

	var id = 0;
	function nextId() {
	  return id++;
	}

	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}

	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);

	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }

	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;

	    this._result = new Array(this.length);

	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}

	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};

	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;

	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};

	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;

	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);

	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};

	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;

	  if (promise._state === PENDING) {
	    this._remaining--;

	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }

	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};

	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;

	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};

	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```

	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:

	  Example:

	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];

	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```

	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}

	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.

	  Example:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```

	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:

	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });

	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });

	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```

	  An example real-world use case is implementing timeouts:

	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```

	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;

	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}

	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:

	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  Instead of writing the above, your code now simply becomes the following:

	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));

	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```

	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}

	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}

	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}

	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.

	  Terminology
	  -----------

	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.

	  A promise can be in one of three states: pending, fulfilled, or rejected.

	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.

	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.


	  Basic Usage:
	  ------------

	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);

	    // on failure
	    reject(reason);
	  });

	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Advanced Usage:
	  ---------------

	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.

	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();

	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();

	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }

	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```

	  Unlike callbacks, promises are great composable primitives.

	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON

	    return values;
	  });
	  ```

	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];

	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}

	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;

	Promise.prototype = {
	  constructor: Promise,

	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,

	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};

	function polyfill() {
	    var local = undefined;

	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }

	    var P = local.Promise;

	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }

	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }

	    local.Promise = Promise;
	}

	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;

	return Promise;

	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), (function() { return this; }())))

/***/ },
/* 38 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(function(win) {

	/**
	 * FastDom
	 *
	 * Eliminates layout thrashing
	 * by batching DOM read/write
	 * interactions.
	 *
	 * @author Wilson Page <wilsonpage@me.com>
	 * @author Kornel Lesinski <kornel.lesinski@ft.com>
	 */

	'use strict';

	/**
	 * Mini logger
	 *
	 * @return {Function}
	 */
	var debug = 0 ? console.log.bind(console, '[fastdom]') : function() {};

	/**
	 * Normalized rAF
	 *
	 * @type {Function}
	 */
	var raf = win.requestAnimationFrame
	  || win.webkitRequestAnimationFrame
	  || win.mozRequestAnimationFrame
	  || win.msRequestAnimationFrame
	  || function(cb) { return setTimeout(cb, 16); };

	/**
	 * Initialize a `FastDom`.
	 *
	 * @constructor
	 */
	function FastDom() {
	  var self = this;
	  self.reads = [];
	  self.writes = [];
	  self.raf = raf.bind(win); // test hook
	  debug('initialized', self);
	}

	FastDom.prototype = {
	  constructor: FastDom,

	  /**
	   * Adds a job to the read batch and
	   * schedules a new frame if need be.
	   *
	   * @param  {Function} fn
	   * @public
	   */
	  measure: function(fn, ctx) {
	    debug('measure');
	    var task = !ctx ? fn : fn.bind(ctx);
	    this.reads.push(task);
	    scheduleFlush(this);
	    return task;
	  },

	  /**
	   * Adds a job to the
	   * write batch and schedules
	   * a new frame if need be.
	   *
	   * @param  {Function} fn
	   * @public
	   */
	  mutate: function(fn, ctx) {
	    debug('mutate');
	    var task = !ctx ? fn : fn.bind(ctx);
	    this.writes.push(task);
	    scheduleFlush(this);
	    return task;
	  },

	  /**
	   * Clears a scheduled 'read' or 'write' task.
	   *
	   * @param {Object} task
	   * @return {Boolean} success
	   * @public
	   */
	  clear: function(task) {
	    debug('clear', task);
	    return remove(this.reads, task) || remove(this.writes, task);
	  },

	  /**
	   * Extend this FastDom with some
	   * custom functionality.
	   *
	   * Because fastdom must *always* be a
	   * singleton, we're actually extending
	   * the fastdom instance. This means tasks
	   * scheduled by an extension still enter
	   * fastdom's global task queue.
	   *
	   * The 'super' instance can be accessed
	   * from `this.fastdom`.
	   *
	   * @example
	   *
	   * var myFastdom = fastdom.extend({
	   *   initialize: function() {
	   *     // runs on creation
	   *   },
	   *
	   *   // override a method
	   *   measure: function(fn) {
	   *     // do extra stuff ...
	   *
	   *     // then call the original
	   *     return this.fastdom.measure(fn);
	   *   },
	   *
	   *   ...
	   * });
	   *
	   * @param  {Object} props  properties to mixin
	   * @return {FastDom}
	   */
	  extend: function(props) {
	    debug('extend', props);
	    if (typeof props != 'object') throw new Error('expected object');

	    var child = Object.create(this);
	    mixin(child, props);
	    child.fastdom = this;

	    // run optional creation hook
	    if (child.initialize) child.initialize();

	    return child;
	  },

	  // override this with a function
	  // to prevent Errors in console
	  // when tasks throw
	  catch: null
	};

	/**
	 * Schedules a new read/write
	 * batch if one isn't pending.
	 *
	 * @private
	 */
	function scheduleFlush(fastdom) {
	  if (!fastdom.scheduled) {
	    fastdom.scheduled = true;
	    fastdom.raf(flush.bind(null, fastdom));
	    debug('flush scheduled');
	  }
	}

	/**
	 * Runs queued `read` and `write` tasks.
	 *
	 * Errors are caught and thrown by default.
	 * If a `.catch` function has been defined
	 * it is called instead.
	 *
	 * @private
	 */
	function flush(fastdom) {
	  debug('flush');

	  var writes = fastdom.writes;
	  var reads = fastdom.reads;
	  var error;

	  try {
	    debug('flushing reads', reads.length);
	    runTasks(reads);
	    debug('flushing writes', writes.length);
	    runTasks(writes);
	  } catch (e) { error = e; }

	  fastdom.scheduled = false;

	  // If the batch errored we may still have tasks queued
	  if (reads.length || writes.length) scheduleFlush(fastdom);

	  if (error) {
	    debug('task errored', error.message);
	    if (fastdom.catch) fastdom.catch(error);
	    else throw error;
	  }
	}

	/**
	 * We run this inside a try catch
	 * so that if any jobs error, we
	 * are able to recover and continue
	 * to flush the batch until it's empty.
	 *
	 * @private
	 */
	function runTasks(tasks) {
	  debug('run tasks');
	  var task; while (task = tasks.shift()) task();
	}

	/**
	 * Remove an item from an Array.
	 *
	 * @param  {Array} array
	 * @param  {*} item
	 * @return {Boolean}
	 */
	function remove(array, item) {
	  var index = array.indexOf(item);
	  return !!~index && !!array.splice(index, 1);
	}

	/**
	 * Mixin own properties of source
	 * object into the target.
	 *
	 * @param  {Object} target
	 * @param  {Object} source
	 */
	function mixin(target, source) {
	  for (var key in source) {
	    if (source.hasOwnProperty(key)) target[key] = source[key];
	  }
	}

	// There should never be more than
	// one instance of `FastDom` in an app
	var exports = win.fastdom = (win.fastdom || new FastDom()); // jshint ignore:line

	// Expose to CJS & AMD
	if (("function")[0] == 'f') !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return exports; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	else if ((typeof module)[0] == 'o') module.exports = exports;

	})( typeof window !== 'undefined' ? window : this);


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classlistPolyfill = __webpack_require__(42);

	var _classlistPolyfill2 = _interopRequireDefault(_classlistPolyfill);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var fadeOut_inactive = function fadeOut_inactive() {
	  var _inactive = document.getElementsByClassName('inactive');
	  //console.log('addClass fadeOut...');
	  for (var i = 0; i < _inactive.length; i++) {
	    _inactive[i].classList.add('fadeOutx99');
	  }
	};

	exports.default = fadeOut_inactive;

/***/ },
/* 41 */
/***/ function(module, exports) {

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

/***/ },
/* 42 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  // Including IE < Edge missing SVGElement.classList
	  if (!("classList" in document.createElement("_"))
	    || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ }
/******/ ]);