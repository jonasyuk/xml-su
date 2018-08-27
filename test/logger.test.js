"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var logger_1 = require("../lib/logger");
var _a = require('winston'), createLogger = _a.createLogger, format = _a.format, transports = _a.transports;
ava_1.default('logger support log function', function (t) {
    logger_1.logger.info('infoMsg');
    logger_1.logger.warn('warnMsg');
    logger_1.logger.error('errorMsg');
    t.pass();
});
ava_1.default('logger set log level function', function (t) {
    logger_1.logger.setLogLevel(logger_1.LOG_LEVEL.error);
    t.is(logger_1.logger.getLogLevel(), logger_1.LOG_LEVEL.error);
});
ava_1.default('logger winston log instance', function (t) {
    var newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    logger_1.logger.setLogInstance(newLogInstance);
    logger_1.logger.info('infoMsg');
    logger_1.logger.warn('warnMsg');
    logger_1.logger.error('errorMsg');
    logger_1.logger.setLogInstance(null);
    t.pass();
});
ava_1.default('logger validate log instance', function (t) {
    logger_1.logger.resetLogInstance();
    t.is(console, logger_1.logger.getLogInstance());
    var newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    logger_1.logger.setLogInstance(newLogInstance);
    t.is(newLogInstance, logger_1.logger.getLogInstance());
    t.pass();
});
