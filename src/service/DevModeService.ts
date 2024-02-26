
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
        AppStateService.appState.setFrameDirectoryNames(await DirectoryReader.readDirectoryContent('./frame'))
        AppStateService.appState.setViewDirectoryNames(await DirectoryReader.readDirectoryContent('./view'))
        } catch (error) {
            Log.error(Context.SPAL, `Error during Rapid dev mode initialization: ${error}`);
        }
    }
}