const _ = require('lodash')

let appLogger = console
const LOG_LEVEL = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
}

const LOG_LEVEL_KEY = {
    error:'error',
    warn:'warn',
    info:'info',
    debug:'debug',
}

let logLevel = LOG_LEVEL.info

const setLogInstance = logger => {
    appLogger = logger
}

const info = infoMsg => {
    if (logLevel >= LOG_LEVEL.info) {
        appLogger.info(infoMsg)
    }
}

const error = errorMsg => {
    if (logLevel >= LOG_LEVEL.error) {
        appLogger.error(errorMsg)
    }
}

const warn = warnMsg => {
    if (logLevel >= LOG_LEVEL.warn) {
        appLogger.warn(warnMsg)
    }
}

const debug = debugMsg => {
    if (logLevel >= LOG_LEVEL.debug) {
        appLogger.debug(debugMsg)
    }
}

const setLogLevel = levelKey => {
    logLevel = _.findKey(LOG_LEVEL, levelKey) || LOG_LEVEL.info
}

module.exports.setLogInstance = setLogInstance
module.exports.setLogLevel = setLogLevel
module.exports.info = info
module.exports.error = error
module.exports.warn = warn
module.exports.debug = debug
module.exports.LOG_LEVEL_KEY = LOG_LEVEL_KEY






