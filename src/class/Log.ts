import { Context } from "../enum/Context.js";
import { LogLevel } from "../enum/LogLevel.js";

export class Log {
    private readonly context: Context;
    private readonly level: LogLevel;
    private readonly message: unknown;
    private readonly timeStamp: Date;
    private readonly style: string;

    public constructor(context: Context, level: LogLevel, message: unknown) {
        this.context = context;
        this.level = level;
        this.message = message;
        this.timeStamp = new Date(Date.now())
        
        switch(level) {
            //You can use default styles for the logs
            //example: color: black; background-color: red;
            case LogLevel.TRACE:
                this.style = '';
                break;

            case LogLevel.DEBUG:
                this.style = '';
                break;
            
            case LogLevel.INFO:
                this.style = '';
                break;

            case LogLevel.WARNING:
                this.style = '';
                break;

            case LogLevel.ERROR:
                this.style = '';
                break;
        }
    }

    public getContext(): Context {
        return this.context;
    }

    public getLevel(): LogLevel {
        return this.level;
    }

    public getMessage(): string {
        return this.message as string;
    }

    public getTimeStamp(): Date {
        return this.timeStamp;
    }

    public getStyle(): string {
        return this.style;
    }
}