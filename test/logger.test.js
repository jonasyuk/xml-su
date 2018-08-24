"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const logger_1 = require("../lib/logger");
const { createLogger, format, transports } = require('winston');
ava_1.default('logger support log function', t => {
    logger_1.logger.info('infoMsg');
    logger_1.logger.warn('warnMsg');
    logger_1.logger.error('errorMsg');
    t.pass();
});
ava_1.default('logger set log level function', t => {
    logger_1.logger.setLogLevel(logger_1.LOG_LEVEL.error);
    t.is(logger_1.logger.getLogLevel(), logger_1.LOG_LEVEL.error);
});
ava_1.default('logger winston log instance', t => {
    let newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    logger_1.logger.setLogInstance(newLogInstance);
    logger_1.logger.info('infoMsg');
    logger_1.logger.warn('warnMsg');
    logger_1.logger.error('errorMsg');
    logger_1.logger.setLogInstance(null);
    t.pass();
});
ava_1.default('logger validate log instance', t => {
    logger_1.logger.resetLogInstance();
    t.is(console, logger_1.logger.getLogInstance());
    let newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    logger_1.logger.setLogInstance(newLogInstance);
    t.is(newLogInstance, logger_1.logger.getLogInstance());
    t.pass();
});
