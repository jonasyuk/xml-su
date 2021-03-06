import test from 'ava'
import {logger, LogLevel} from '../lib/Logger'
const { createLogger, format, transports } = require('winston');

test('logger support log function', t => {
    logger.info('infoMsg')
    logger.warn('warnMsg')
    logger.error('errorMsg')
    t.pass()
})

test('logger set log level function', t => {
    logger.setLogLevel(LogLevel.error)
    t.is(logger.getLogLevel(), LogLevel.error);
})

test('logger winston log instance',t =>{
    let newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    logger.setLogInstance(newLogInstance)
    logger.info('infoMsg')
    logger.warn('warnMsg')
    logger.error('errorMsg')
    logger.setLogInstance(null)
    t.pass()
})

test('logger validate log instance',t =>{
    logger.resetLogInstance()
    t.is(console,logger.getLogInstance())
    let newLogInstance = createLogger({
        transports: [new transports.Console()]
    });
    logger.setLogInstance(newLogInstance)
    t.is(newLogInstance,logger.getLogInstance())
    t.pass()
})

