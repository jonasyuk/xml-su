"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var Logger_1 = require("../lib/Logger");
var _a = require('winston'), createLogger = _a.createLogger, format = _a.format, transports = _a.transports;
ava_1.default('logger support log function', function (t) {
    Logger_1.logger.info('infoMsg');
    Logger_1.logger.warn('warnMsg');
    Logger_1.logger.error('errorMsg');
    t.pass();
});
ava_1.default('logger set log level function', function (t) {
    Logger_1.logger.setLogLevel(Logger_1.LogLevel.error);
    t.is(Logger_1.logger.getLogLevel(), Logger_1.LogLevel.error);
});
ava_1.default('logger winston log instance', function (t) {
    var newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    Logger_1.logger.setLogInstance(newLogInstance);
    Logger_1.logger.info('infoMsg');
    Logger_1.logger.warn('warnMsg');
    Logger_1.logger.error('errorMsg');
    Logger_1.logger.setLogInstance(null);
    t.pass();
});
ava_1.default('logger validate log instance', function (t) {
    Logger_1.logger.resetLogInstance();
    t.is(console, Logger_1.logger.getLogInstance());
    var newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    Logger_1.logger.setLogInstance(newLogInstance);
    t.is(newLogInstance, Logger_1.logger.getLogInstance());
    t.pass();
});
