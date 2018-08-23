import * as _ from "lodash"


enum LogLevel {
    info = 0,
    error = 1,
    warn = 2,
    debug = 3,
}

class Logger {
    private logInstance: any
    private level: LogLevel

    constructor(instance: any, logLevel: LogLevel) {
        this.logInstance = instance
        this.level = logLevel
    }

    public info(infoMsg: string): void {
        if (this.level >= LogLevel.info) {
            this.logInstance.info(infoMsg)
        }
    }

    public error(errorMsg: string): void {
        if (this.level >= LogLevel.error) {
            this.logInstance.error(errorMsg)
        }
    }

    public warn(warnMsg: string): void {
        if (this.level >= LogLevel.warn) {
            this.logInstance.warn(warnMsg)
        }
    }

    public debug(debugMsg: string): void {
        if (this.level >= LogLevel.debug) {
            this.logInstance.debug(debugMsg)
        }
    }

    public setLogLevel(logLevel: LogLevel): void {
        this.level = logLevel
    }

    public getLogLevel(): LogLevel {
        return this.level
    }

    public setLogInstance(logInstance: any): void {
        _.isEmpty(logInstance)
        this.logInstance = logInstance
    }
}

export const logger = new Logger(console,LogLevel.info)
export const LOG_LEVEL = LogLevel




