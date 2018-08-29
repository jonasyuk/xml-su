import * as _ from "lodash"


enum LogLevel {
    error = 0,
    warn = 1,
    info = 2,
}

interface ILogger {

}

class Logger {
    private logInstance: any
    private level: LogLevel

    constructor(instance: any, logLevel: LogLevel) {
        this.logInstance = instance
        this.level = logLevel
    }

    info(infoMsg: string): void {
        if (this.level >= LogLevel.info) {
            this.logInstance.info(infoMsg)
        }
    }

    error(errorMsg: string): void {
        if (this.level >= LogLevel.error) {
            this.logInstance.error(errorMsg)
        }
    }

    warn(warnMsg: string): void {
        if (this.level >= LogLevel.warn) {
            this.logInstance.warn(warnMsg)
        }
    }

    setLogLevel(logLevel: LogLevel): void {
        this.level = logLevel
    }

    getLogLevel(): LogLevel {
        return this.level
    }

    setLogInstance(logInstance: any): void {
        if (!_.isEmpty(logInstance)) {
            this.logInstance = logInstance
        }
    }

    getLogInstance(): any {
        return this.logInstance
    }

    resetLogInstance(): void {
        this.logInstance = console
    }

}

const logger = new Logger(console, LogLevel.info)
export {logger, LogLevel}




