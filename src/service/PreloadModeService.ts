import { FrameElement } from "../class/FrameElement.js";
import { ViewElement } from "../class/ViewElement.js";
import { Context } from "../enum/Context.js";
import { PreloadMode } from "../enum/PreloadMode.js";
import { Log } from "../util/Log.js";
import { AppStateService } from "./AppStateService.js";

export module PreloadModeService {
    export const initPreloadModeService = async () => {
        try {
            Log.debug(Context.SPAL, `Initializing PreloadMode. Detected preload mode: ${AppStateService.appState.getAppPreloadMode()}`);
            if (AppStateService.appState.getAppPreloadMode() == PreloadMode.FULL) {
                await initFullPreloadMode();
            }
        } catch (error) {
            Log.error(Context.SPAL, `Error durring PreloadMode initialization: ${error}`);
        }
    }

    const initFullPreloadMode = async () => {
        try {
            AppStateService.appState.setLoadedFrameElements(await generateFrames(AppStateService.appState.getFrameDirectoryNames()) as FrameElement[]);
            AppStateService.appState.setLoadedViewElements(await generateViews(AppStateService.appState.getViewDirectoryNames()) as ViewElement[]);
        } catch (error) {
            Log.error(Context.SPAL, `Error during initializing Full Preload Mode: ${error}`);
        }
    }

    const generateFrames = (frameDirectoryNames: string[]) => {
        try {
            let frameElements: FrameElement[] = [];
            frameDirectoryNames.forEach(async frameDirectoryName => {
                const frameElement = FrameElement.build(`./frame/${frameDirectoryName}/${frameDirectoryName}.html`) as unknown as FrameElement;
                frameElements.push(frameElement);
            });
            return Promise.all(frameElements);
        } catch (error) {
            Log.error(Context.SPAL, `Error during generating frames: ${error}`);
            return undefined
        }
    }

    const generateViews = (viewDirectoryNames: string[]) => {
        let viewElements: ViewElement[] = [];
        viewDirectoryNames.forEach(async viewDirectoryName => {
            const viewElement = ViewElement.build(viewDirectoryName, `./view/${viewDirectoryName}/${viewDirectoryName}.html`) as unknown as ViewElement;
            viewElements.push(viewElement);
        });
        return Promise.all(viewElements);
    }
}