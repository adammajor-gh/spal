import { Log } from "../class/Log.js";
import { Log as _Log } from "../util/Log.js"
import { Context } from "../enum/Context.js"
import { LogLevel } from "../enum/LogLevel.js"
import { SpalStateService } from "./SpalStateService.js";

let isInitialized = false;
let logBuffer: Log[] = [];
const filterForDebugMode = [LogLevel.DEBUG, LogLevel.TRACE];
const filterForSuppressWarning = [LogLevel.WARNING];

export module LoggerService {

    export const initialize = () => {
        try {
            _Log.trace(Context.SPAL, `Logger service initialization process started`);
            if (!SpalStateService.spalState.getIsDebugMode()) logBuffer = logBuffer.filter(log => !filterForDebugMode.includes(log.getLevel()));
            if (SpalStateService.spalState.getIsSuppressWarning()) logBuffer = logBuffer.filter(log => !filterForSuppressWarning.includes(log.getLevel()));
            processLogBuffer();
            isInitialized = true;
            _Log.trace(Context.SPAL, `Logger service initialization process success`);
        } catch (error) {
            _Log.error(Context.SPAL, `Error during the logger service initialization`);
        }
    }

    export const createNewLog = (context: Context, level: LogLevel, message: unknown) => {
        try {
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
        } catch (error) {
            _Log.error(Context.SPAL, `Error during create a log, context:${context}; level:${level}; message:${message}; error: ${error}`);
        }
    }
}

const processLogBuffer = () => {
    try {
        logBuffer.forEach((log) => {
            writeOutLog(log);
        });
        logBuffer = [];
    } catch (error) {
        _Log.error(Context.SPAL, `Error during process log buffer, Log buffer: ${logBuffer.toString()}; error: ${error}`);
    }
}

const writeOutLog = (log: Log) => {
    try {
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
    } catch (error) {
        _Log.error(Context.SPAL, `Error during write out log, context:${log.getContext()}; level:${log.getLevel()}; timestamp:${log.getTimeStamp()}; message:${log.getMessage()}; style:${log.getStyle()}; error:${error};`);
    }
}