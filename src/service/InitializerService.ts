import { SpalConfig } from "../type/SpalConfig.js";
import { LoggerService } from "./LoggerService.js";
import { SpalConfigService } from "./SpalConfigService.js";
import { SpalStateService } from "./SpalStateService.js";

export module Initializer {
    export const run = async () => {
        const spalConfig: SpalConfig = await SpalConfigService.initialize();
        await SpalStateService.initialize(spalConfig);
        LoggerService.initialize();
    }
}