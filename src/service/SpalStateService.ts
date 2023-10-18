import { SpalState } from "../class/SpalState.js";
import { SpalConfig } from "../type/SpalConfig";

export module SpalStateService {
    export let spalState: SpalState;

    export const initialize = async (spalConfig: SpalConfig) => {
        spalState = new SpalState(spalConfig);
    }
}