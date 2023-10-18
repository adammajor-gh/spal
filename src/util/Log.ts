import { Context } from "../enum/Context.js"
import { LogLevel } from "../enum/LogLevel.js"
import { LoggerService } from "../service/LoggerService.js"

export module Log {

    export const info = (context: Context, message: unknown) => {
        LoggerService.createNewLog(context, LogLevel.INFO, message);
    }

    export const trace = (context: Context, message: unknown) => {
        LoggerService.createNewLog(context, LogLevel.TRACE, message);
    }

    export const debug = (context: Context, message: unknown) => {
        LoggerService.createNewLog(context, LogLevel.DEBUG, message);
    }

    export const warning = (context: Context, message: unknown) => {
        LoggerService.createNewLog(context, LogLevel.WARNING, message);
    }

    export const error = (context: Context, message: unknown) => {
        LoggerService.createNewLog(context, LogLevel.ERROR, message);
    }
}