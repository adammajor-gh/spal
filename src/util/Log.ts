import { Context } from "../enum/Context.js"
import { LogLevel } from "../enum/LogLevel.js"
import { LoggerService } from "../service/LoggerService.js"

export module Log {

    export const info = (context: Context, message: unknown) => {
        try {
            LoggerService.createNewLog(context, LogLevel.INFO, message);
        } catch (error) {
            info(Context.SPAL, `Error during create an INFO log, context:${context}; message:${message};`);
        }
    }

    export const trace = (context: Context, message: unknown) => {
        try {
            LoggerService.createNewLog(context, LogLevel.TRACE, message);
        } catch (error) {
            info(Context.SPAL, `Error during create a TRACE log, context:${context}; message:${message};`);
        }
    }

    export const debug = (context: Context, message: unknown) => {
        try {
            LoggerService.createNewLog(context, LogLevel.DEBUG, message);
        } catch (error) {
            info(Context.SPAL, `Error during create a DEBUG log, context:${context}; message:${message};`);
        }
    }

    export const warning = (context: Context, message: unknown) => {
        try {
            LoggerService.createNewLog(context, LogLevel.WARNING, message);
        } catch (error) {
            info(Context.SPAL, `Error during create a WARNING log, context:${context}; message:${message};`);
        }
    }

    export const error = (context: Context, message: unknown) => {
        try {
            LoggerService.createNewLog(context, LogLevel.ERROR, message);
        } catch (error) {
            info(Context.SPAL, `Error during create an ERROR log, context:${context}; message:${message};`);
        }
    }
}