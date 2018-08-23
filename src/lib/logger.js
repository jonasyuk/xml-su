"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["info"] = 0] = "info";
    LogLevel[LogLevel["error"] = 1] = "error";
    LogLevel[LogLevel["warn"] = 2] = "warn";
    LogLevel[LogLevel["debug"] = 3] = "debug";
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
    debug(infoMsg) {
        if (this.level >= LogLevel.debug) {
            this.logInstance.debug(infoMsg);
        }
    }
    setLogLevel(logLevel) {
        this.level = logLevel;
    }
    getLogLevel() {
        return this.level;
    }
    setLogInstance(logInstance) {
        this.logInstance = logInstance;
    }
}
exports.logger = new Logger(console, LogLevel.info);
exports.LOG_LEVEL = LogLevel;
//# sourceMappingURL=logger.js.map