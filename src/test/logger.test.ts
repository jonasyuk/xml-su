import test from 'ava'
import {logger, LOG_LEVEL} from '../lib/logger'

test('logger', t => {
    logger.setLogLevel(LOG_LEVEL.debug)
    logger.info('infoMsg')
    logger.warn('warnMsg')
    logger.error('errorMsg')
    logger.debug('debugMsg')
    console.log(logger.getLogLevel())
    console.debug(logger.getLogLevel())
    t.pass()
})

test('logger2', t => {

    console.log(logger.getLogLevel())
    console.debug(logger.getLogLevel())
    t.pass()
})