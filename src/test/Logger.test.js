"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const logger_1 = require("../lib/logger");
ava_1.default('logger', t => {
    logger_1.logger.setLogLevel(logger_1.LOG_LEVEL.debug);
    logger_1.logger.info('infoMsg');
    logger_1.logger.warn('warnMsg');
    logger_1.logger.error('errorMsg');
    logger_1.logger.debug('debugMsg');
    t.pass();
});
//# sourceMappingURL=logger.test.js.map