import { Context } from "../enum/Context.js";
import { Log } from "../util/Log.js";
import { AppConfigUtil } from "../util/AppConfig.js";
import { AppStateService } from "./AppStateService.js";
import { LoggerService } from "./LoggerService.js";
import { SpalConfigUtil } from "../util/SpalConfig.js";
import { SpalStateService } from "./SpalStateService.js";
import { SpalConfig } from "../type/SpalConfig.js";
import { AppConfig } from "../type/AppConfig.js";
import { LayoutService } from "./LayoutService.js";
import { DevModeService } from "./DevModeService.js";
import { PreloadModeService } from "./PreloadModeService.js";
import { ViewchangerService } from "./ViewchangerService.js";

export module Initializer {
    export const run = async () => {

        Log.trace(Context.SPAL, 'SPAL initialization process started');

        try{
            const spalConfig: SpalConfig = await SpalConfigUtil.initialize() as SpalConfig;
            await SpalStateService.initialize(spalConfig);

            LoggerService.initialize();

            const appConfig: AppConfig = await AppConfigUtil.initialize() as AppConfig;
            await AppStateService.initialize(appConfig);

            await LayoutService.initialize();

            await DevModeService.initDevModeService();
            await PreloadModeService.initPreloadModeService();

            AppStateService.appState.getLoadedViewelements()[1].displayElement();

            ViewchangerService.refreshViewChangers();
            console.log(AppStateService.appState)

            Log.trace(Context.SPAL, 'SPAL initialization process success');
        } catch(error) {
            Log.error(Context.SPAL, `Error during the initialization process: ${error}`)
        }
    }
}