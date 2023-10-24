import { Log } from "../class/Log.js";
import { Context } from "../enum/Context.js"
import { LogLevel } from "../enum/LogLevel.js"
import { SpalStateService } from "./SpalStateService.js";

let isInitialized = false;
let logBuffer: Log[] = [];
const filterForDebugMode = [LogLevel.DEBUG, LogLevel.TRACE];
const filterForSuppressWarning = [LogLevel.WARNING];

export module LoggerService {

    export const initialize = () => {
        if (!SpalStateService.spalState.getIsDebugMode()) logBuffer = logBuffer.filter(log => !filterForDebugMode.includes(log.getLevel()));
        if (SpalStateService.spalState.getIsSuppressWarning()) logBuffer = logBuffer.filter(log => !filterForSuppressWarning.includes(log.getLevel()));
        processLogBuffer();
        isInitialized = true;
    }

    export const createNewLog = (context: Context, level: LogLevel, message: unknown) => {

        if (!isInitialized) {
            logBuffer.push(new Log(context, level, message));
        } else {
            switch(level) {
                case LogLevel.TRACE:
                    if (SpalStateService.spalState.getIsDebugMode()) logBuffer.push(new Log(context, level, message));
                    break;
                
                case LogLevel.DEBUG:
                    if (SpalStateService.spalState.getIsDebugMode()) logBuffer.push(new Log(context, level, message));
                    break;

                case LogLevel.INFO:
                    logBuffer.push(new Log(context, level, message));
                    break;

                case LogLevel.WARNING:
                    if (!SpalStateService.spalState.getIsSuppressWarning()) logBuffer.push(new Log(context, level, message));
                    break;

                case LogLevel.ERROR:
                    logBuffer.push(new Log(context, level, message));
                    break;
            }
            processLogBuffer();
        }
    }
}

const processLogBuffer = () => {
    logBuffer.forEach((log) => {
        writeOutLog(log);
    });
    logBuffer = [];
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
            console.log(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;

        case LogLevel.WARNING:
            console.warn(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;

        case LogLevel.ERROR:
            console.error(`%c[${log.getContext()}] [${log.getLevel()}] (${log.getTimeStamp()}): ${log.getMessage()}`, log.getStyle());
            break;
    }
}