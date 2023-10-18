import { SpalConfig } from "../type/SpalConfig"

export class SpalState {

    //dev
    private readonly isDebugMode: boolean

    //log
    private readonly isSuppressWarning: boolean

    public constructor (spalConfig: SpalConfig) {
        this.isDebugMode = spalConfig.dev.isDebugMode;
        this.isSuppressWarning = spalConfig.log.isSuppressWarning;
    }

    public getIsDebugMode(): boolean {
        return this.isDebugMode;
    }

    public getIsSuppressWarning(): boolean {
        return this.isSuppressWarning;
    }
}