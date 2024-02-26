
import { FrameElement } from "../class/FrameElement.js"
import { ViewElement } from "../class/ViewElement.js"
import { Context } from "../enum/Context.js"
import { DevMode } from "../enum/DevMode.js"
import { DirectoryReader } from "../util/DirectoryReader.js"
import { Log } from "../util/Log.js"
import { AppStateService } from "./AppStateService.js"

export module DevModeService {

    export const initDevModeService = async () => {
        try {
            Log.debug(Context.SPAL, `Initializing DevMode. Detected devmode: ${AppStateService.appState.getAppDevMode()}`);
            if (AppStateService.appState.getAppDevMode() == DevMode.RAPID) {
                await initRapidDevMode()
            }
        } catch (error) {
            Log.error(Context.SPAL, `Error durring DevMode initialization: ${error}`);
        }
    }

    const initRapidDevMode = async () => {
        try {
        const frameDirectoryNames: string[] = await DirectoryReader.readDirectoryContent('./frame');
        AppStateService.appState.setLoadedFrameElements(await generateFrames(frameDirectoryNames) as FrameElement[]);
        
        const viewDirectoryNames: string[] = await DirectoryReader.readDirectoryContent('./view');
        AppStateService.appState.setLoadedViewElements(await generateViews(viewDirectoryNames) as ViewElement[])
        } catch (error) {
            Log.error(Context.SPAL, `Error during Rapid dev mode initialization: ${error}`);
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