import { DevMode } from "../enum/DevMode.js";
import { PreloadMode } from "../enum/PreloadMode.js";
import { AppConfig } from "../type/AppConfig.js"
import { FrameElement } from "./FrameElement.js";
import { ViewElement } from "./ViewElement.js";

export class AppState {
    private readonly appDevMode: DevMode
    private readonly appPreloadMode: PreloadMode
    private frameDirectoryNames: string[] = []
    private viewDirectoryNames: string [] = []
    private loadedFrameElements: FrameElement[] = []
    private loadedViewElements: ViewElement[] = []

    public constructor (appConfig: AppConfig) {
        this.appDevMode = appConfig.mode.appDevMode;
        this.appPreloadMode = appConfig.mode.appPreloadMode;
    }

    public getAppDevMode(): DevMode {
        return this.appDevMode;
    }

    public getAppPreloadMode(): PreloadMode {
        return this.appPreloadMode;
    }

    public getFrameDirectoryNames(): string[] {
        return this.frameDirectoryNames;
    }

    public setFrameDirectoryNames(frameDirectoryNames: string []) {
        this.frameDirectoryNames = frameDirectoryNames;
    } 

    public getViewDirectoryNames(): string[] {
        return this.viewDirectoryNames;
    }

    public setViewDirectoryNames(viewDirectoryNames: string[]) {
        this.viewDirectoryNames = viewDirectoryNames;
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