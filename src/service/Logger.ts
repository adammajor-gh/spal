//import { Log } from "../class/Log";

import { Log } from "../class/Log";
import { Context } from "../enum/Context"
import { LogLevel } from "../enum/LogLevel"

export module Logger {
    //let isInitialized: boolean = false;
    let logBuffer: Log[] = [];
    

    export const initialize = () => {

    }

    export const createNewLog = (context: Context, level: LogLevel, message: string) => {
        logBuffer.push(new Log(context, level, message));
        processLogbuffer(logBuffer);
    }
}

const processLogbuffer = (logBuffer: Log[]) => {
    logBuffer.forEach(log => {
        writeOutLog(log);
        logBuffer = logBuffer.filter(log => log != log);
    });
}

const writeOutLog = (log: Log) => {
    switch (log.getLevel()) {

        case LogLevel.INFO:
            break;
            
        case LogLevel.TRACE:
            break;

        case LogLevel.DEBUG:
            break;

        case LogLevel.WARNING:
            break;

        case LogLevel.ERROR:
            break;
    }
}