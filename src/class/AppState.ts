import { DevMode } from "../enum/Devmode.js";
import { AppConfig } from "../type/AppConfig.js"
import { FrameElement } from "./FrameElement.js";
import { ViewElement } from "./ViewElement.js";

export class AppState {
    private readonly appDevMode: DevMode
    private readonly appPreloadMode: string
    private loadedFrameElements: FrameElement[]
    private loadedViewElements: ViewElement[]

    public constructor (appConfig: AppConfig, frameElements: FrameElement[], viewElements: ViewElement[]) {
        this.appDevMode = appConfig.mode.appDevMode;
        this.appPreloadMode = appConfig.mode.appPreloadMode;
        this.loadedFrameElements = frameElements;
        this.loadedViewElements = viewElements;
    }

    public getAppDevMode(): string {
        return this.appDevMode;
    }

    public getAppPreloadMode(): string {
        return this.appPreloadMode;
    }

    public getLoadedFrameElements(): FrameElement[] {
        return this.loadedFrameElements;
    }

    public getLoadedViewelements(): ViewElement[] {
        return this.loadedViewElements;
    }
}