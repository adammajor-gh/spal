import { SpalState } from "../class/SpalState.js";
import { Context } from "../enum/Context.js";
import { SpalConfig } from "../type/SpalConfig";
import { Log } from "../util/Log.js";

export module SpalStateService {
    export let spalState: SpalState;

    export const initialize = async (spalConfig: SpalConfig) => {
        Log.trace(Context.SPAL, `Spal state service initialization process started`);

        try {
            spalState = new SpalState(spalConfig);
            Log.trace(Context.SPAL, `Spal state service initialization process success`);
        } catch (error) {
            Log.error(Context.SPAL, `Error during initialize Spal state service: ${error}`);
        }
    }
}