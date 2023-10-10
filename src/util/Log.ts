import { Context } from "../enum/Context"
import { LogLevel } from "../enum/LogLevel"
import { Logger } from "../service/Logger"

export module Log {

    export const info = (context: Context, message: string) => {
        Logger.createNewLog(context, LogLevel.INFO, message);
    }

    export const trace = (context: Context, message: string) => {
        Logger.createNewLog(context, LogLevel.TRACE, message);
    }

    export const debug = (context: Context, message: string) => {
        Logger.createNewLog(context, LogLevel.DEBUG, message);
    }

    export const warning = (context: Context, message: string) => {
        Logger.createNewLog(context, LogLevel.WARNING, message);
    }

    export const error = (context: Context, message: string) => {
        Logger.createNewLog(context, LogLevel.ERROR, message);
    }
}