import { AppConfig } from "../type/AppConfig.js"

export class AppState {
    private readonly appDevMode: string
    private readonly appPreloadMode: string

    public constructor (appConfig: AppConfig) {
        this.appDevMode = appConfig.mode.appDevMode;
        this.appPreloadMode = appConfig.mode.appPreloadMode;
    }

    public getAppDevMode(): string {
        return this.appDevMode;
    }

    public getAppPreloadMode(): string {
        return this.appPreloadMode;
    }
}