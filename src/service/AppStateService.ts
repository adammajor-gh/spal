import { AppState } from "../class/AppState.js";
import { Context } from "../enum/Context.js";
import { AppConfig } from "../type/AppConfig.js";
import { Log } from "../util/Log.js";

export module AppStateService {
    export let appState: AppState;

    export const initialize = async (appConfig: AppConfig) => {
        Log.trace(Context.SPAL, `Application state service initialization process started`);

        try {
            appState = new AppState(appConfig);
            Log.trace(Context.SPAL, `Application state service initialization process success`);
        } catch (error) {
            Log.error(Context.SPAL, `Error during initialize Application state service: ${error}`);
        }
    }
}