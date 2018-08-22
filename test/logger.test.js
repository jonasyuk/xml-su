/**
 * Created by Jonas on 2018/8/22.
 */
import test from 'ava'
import logger from '../lib/logger'

test('test default logger function', t =>{
    logger.setLogLevel(logger.LOG_LEVEL_KEY.debug)
    logger.info('infoMsg')
    logger.warn('warnMsg')
    logger.error('errorMsg')
    logger.debug('debugMsg')
    t.pass()
})