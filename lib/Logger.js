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
exports.Logger = Logger;
