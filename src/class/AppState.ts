import { DevMode } from "../enum/DevMode.js";
import { AppConfig } from "../type/AppConfig.js"
import { FrameElement } from "./FrameElement.js";
import { ViewElement } from "./ViewElement.js";

export class AppState {
    private readonly appDevMode: DevMode
    private readonly appPreloadMode: string
    private loadedFrameElements: FrameElement[] = []
    private loadedViewElements: ViewElement[] = []

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

    public getLoadedFrameElements(): FrameElement[] {
        return this.loadedFrameElements;
    }

    public setLoadedFrameElements(frameElements: FrameElement[]) {
        this.loadedFrameElements = frameElements;
    }

    public getLoadedViewelements(): ViewElement[] {
        return this.loadedViewElements;
    }

    public setLoadedViewElements(viewElements: ViewElement[]) {
        this.loadedViewElements = viewElements;
    }
}