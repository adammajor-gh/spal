import { Context } from "../enum/Context.js"
import { LogLevel } from "../enum/LogLevel.js"
import { Logger } from "../service/Logger.js"

export module Log {

    export const info = (context: Context, message: unknown) => {
        Logger.createNewLog(context, LogLevel.INFO, message);
    }

    export const trace = (context: Context, message: unknown) => {
        Logger.createNewLog(context, LogLevel.TRACE, message);
    }

    export const debug = (context: Context, message: unknown) => {
        Logger.createNewLog(context, LogLevel.DEBUG, message);
    }

    export const warning = (context: Context, message: unknown) => {
        Logger.createNewLog(context, LogLevel.WARNING, message);
    }

    export const error = (context: Context, message: unknown) => {
        Logger.createNewLog(context, LogLevel.ERROR, message);
    }
}