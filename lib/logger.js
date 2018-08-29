"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["error"] = 0] = "error";
    LogLevel[LogLevel["warn"] = 1] = "warn";
    LogLevel[LogLevel["info"] = 2] = "info";
})(LogLevel || (LogLevel = {}));
exports.LogLevel = LogLevel;
var Logger = /** @class */ (function () {
    function Logger(instance, logLevel) {
        this.logInstance = instance;
        this.level = logLevel;
    }
    Logger.prototype.info = function (infoMsg) {
        if (this.level >= LogLevel.info) {
            this.logInstance.info(infoMsg);
        }
    };
    Logger.prototype.error = function (errorMsg) {
        if (this.level >= LogLevel.error) {
            this.logInstance.error(errorMsg);
        }
    };
    Logger.prototype.warn = function (warnMsg) {
        if (this.level >= LogLevel.warn) {
            this.logInstance.warn(warnMsg);
        }
    };
    Logger.prototype.setLogLevel = function (logLevel) {
        this.level = logLevel;
    };
    Logger.prototype.getLogLevel = function () {
        return this.level;
    };
    Logger.prototype.setLogInstance = function (logInstance) {
        if (!_.isEmpty(logInstance)) {
            this.logInstance = logInstance;
        }
    };
    Logger.prototype.getLogInstance = function () {
        return this.logInstance;
    };
    Logger.prototype.resetLogInstance = function () {
        this.logInstance = console;
    };
    return Logger;
}());
var logger = new Logger(console, LogLevel.info);
exports.logger = logger;
