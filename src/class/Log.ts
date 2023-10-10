import { Context } from "../enum/Context";
import { LogLevel } from "../enum/LogLevel";

export class Log {
    private readonly context: Context;
    private readonly level: LogLevel;
    private readonly message: string;
    private readonly style: string;

    public constructor(context: Context, level: LogLevel, message: string) {
        this.context = context;
        this.level = level;
        this.message = message;
        this.style = ''
    }

    public getContext(): Context {
        return this.context;
    }

    public getLevel(): LogLevel {
        return this.level;
    }

    public getMessage(): string {
        return this.message;
    }

    public getStyle(): string {
        return this.style;
    }
}