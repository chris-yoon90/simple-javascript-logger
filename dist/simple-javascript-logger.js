(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Logger"] = factory();
	else
		root["Logger"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Logger_1 = __webpack_require__(1);
	exports.eLogLevel = Logger_1.eLogLevel;
	exports.Logger = Logger_1.default;


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var eLogLevel;
	(function (eLogLevel) {
	    eLogLevel[eLogLevel["ERROR"] = 1] = "ERROR";
	    eLogLevel[eLogLevel["WARN"] = 2] = "WARN";
	    eLogLevel[eLogLevel["INFO"] = 3] = "INFO";
	    eLogLevel[eLogLevel["LOG"] = 4] = "LOG";
	})(eLogLevel = exports.eLogLevel || (exports.eLogLevel = {}));
	var Logger = (function () {
	    function Logger(name, logLevel) {
	        this.name = name;
	        this.logLevel = logLevel || eLogLevel.WARN;
	    }
	    Object.defineProperty(Logger.prototype, "Name", {
	        get: function () { return this.name; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Logger.prototype, "Log", {
	        get: function () {
	            if (this.logLevel === eLogLevel.LOG) {
	                return console.log.bind(console, this.generateCurrentTime);
	            }
	            return this.noOp;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Logger.prototype, "Info", {
	        get: function () {
	            if (this.logLevel >= eLogLevel.INFO) {
	                return console.info.bind(console, this.generateCurrentTime);
	            }
	            return this.noOp;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Logger.prototype, "Warn", {
	        get: function () {
	            if (this.logLevel >= eLogLevel.WARN) {
	                return console.warn.bind(console, this.generateCurrentTime);
	            }
	            return this.noOp;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Logger.prototype, "Error", {
	        get: function () {
	            if (this.logLevel >= eLogLevel.ERROR) {
	                return console.error.bind(console, this.generateCurrentTime);
	            }
	            return this.noOp;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @ignore
	     */
	    // tslint:disable-next-line:no-empty
	    Logger.prototype.noOp = function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	    };
	    Object.defineProperty(Logger.prototype, "generateCurrentTime", {
	        /**
	         * @ignore
	         */
	        get: function () {
	            var date = new Date();
	            return "[" + date.toLocaleDateString() + " " + date.toTimeString() + "][" + this.name + "]:";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Logger;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Logger;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=simple-javascript-logger.js.map