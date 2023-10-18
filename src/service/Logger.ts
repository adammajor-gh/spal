//import { Log } from "../class/Log";

import { Log } from "../class/Log.js";
import { Context } from "../enum/Context.js"
import { LogLevel } from "../enum/LogLevel.js"

export module Logger {
    //let isInitialized: boolean = false;
    let logBuffer: Log[] = [];
    

    export const initialize = () => {

    }

    export const createNewLog = (context: Context, level: LogLevel, message: unknown) => {
        logBuffer.push(new Log(context, level, message));
        processLogBuffer(logBuffer);
    }
}

const processLogBuffer = (logBuffer: Log[]) => {
    logBuffer.forEach((log, index) => {
        writeOutLog(log);
        logBuffer.splice(index, logBuffer.length)
    });
}

const writeOutLog = (log: Log) => {
    switch (log.getLevel()) {

        case LogLevel.INFO:
            console.info(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;
            
        case LogLevel.TRACE:
            console.trace(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;

        case LogLevel.DEBUG:
            console.debug(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;

        case LogLevel.WARNING:
            console.warn(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;

        case LogLevel.ERROR:
            console.error(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;
    }
}