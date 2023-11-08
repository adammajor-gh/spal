import { Context } from "../enum/Context.js";
import { SpalConfig } from "../type/SpalConfig.js";
import { Log } from "../util/Log.js";
import { LoggerService } from "./LoggerService.js";
import { SpalConfigService } from "./SpalConfigService.js";
import { SpalStateService } from "./SpalStateService.js";

export module Initializer {
    export const run = async () => {

        Log.trace(Context.SPAL, 'SPAL initialization process started');

        try{
            const spalConfig: SpalConfig = await SpalConfigService.initialize();
            await SpalStateService.initialize(spalConfig);
            LoggerService.initialize();
            Log.trace(Context.SPAL, 'SPAL initialization process success');
        } catch(error) {
            Log.error(Context.SPAL, `Error during the initialization process: ${error}`)
        }
    }
}