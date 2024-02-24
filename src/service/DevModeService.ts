import { DevMode } from "../enum/Devmode.js"
import { AppStateService } from "./AppStateService.js"

export module DevModeService {

    export const initDevModeService = () => {
        if (AppStateService.appState.getAppDevMode() == DevMode.RAPID) {
            initRapidDevMode()
        }
    }

    const initRapidDevMode = () => {
        console.log("Rapid dev mode initialized")
    }

    const initAdvancedDevMode = () => {
        //Implement Advanced dev mode
    }
}