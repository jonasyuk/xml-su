"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["error"] = 0] = "error";
    LogLevel[LogLevel["warn"] = 1] = "warn";
    LogLevel[LogLevel["info"] = 2] = "info";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(instance, logLevel) {
        this.logInstance = instance;
        this.level = logLevel;
    }
    info(infoMsg) {
        if (this.level >= LogLevel.info) {
            this.logInstance.info(infoMsg);
        }
    }
    error(errorMsg) {
        if (this.level >= LogLevel.error) {
            this.logInstance.error(errorMsg);
        }
    }
    warn(warnMsg) {
        if (this.level >= LogLevel.warn) {
            this.logInstance.warn(warnMsg);
        }
    }
    setLogLevel(logLevel) {
        this.level = logLevel;
    }
    getLogLevel() {
        return this.level;
    }
    setLogInstance(logInstance) {
        if (!_.isEmpty(logInstance)) {
            this.logInstance = logInstance;
        }
    }
    getLogInstance() {
        return this.logInstance;
    }
    resetLogInstance() {
        this.logInstance = console;
    }
}
exports.logger = new Logger(console, LogLevel.info);
exports.LOG_LEVEL = LogLevel;
