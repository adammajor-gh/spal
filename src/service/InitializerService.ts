import { Context } from "../enum/Context.js";
import { Log } from "../util/Log.js";
import { AppConfigUtil } from "../util/AppConfig.js";
import { AppStateService } from "./AppStateService.js";
import { LoggerService } from "./LoggerService.js";
import { SpalConfigUtil } from "../util/SpalConfig.js";
import { SpalStateService } from "./SpalStateService.js";
import { SpalConfig } from "../type/SpalConfig.js";
import { AppConfig } from "../type/AppConfig.js";
//import { ViewChanger } from "../util/ViewChanger.js";
import { DirectoryReader } from "../util/DirectoryReader.js";
//import { HtmlElementUtil } from "../util/HtmlElement.js";
import { FrameElement } from "../class/FrameElement.js";
import { ViewElement } from "../class/ViewElement.js";
//import { FileReader } from "../util/FileReader.js";

export module Initializer {
    export const run = async () => {

        Log.trace(Context.SPAL, 'SPAL initialization process started');

        try{
            const spalConfig: SpalConfig = await SpalConfigUtil.initialize() as SpalConfig;
            await SpalStateService.initialize(spalConfig);

            LoggerService.initialize();

            const appConfig: AppConfig = await AppConfigUtil.initialize() as AppConfig;
            await AppStateService.initialize(appConfig);


            //This is for cheatsheet purpose
            const frameDirectories = await DirectoryReader.readDirectoryContent('./frame');
            const viewDirectories = await DirectoryReader.readDirectoryContent('./view');
            let frameElements: FrameElement[] = [];
            let viewElements: ViewElement[] = [];

            frameDirectories.forEach(async frameDirectoryName => {
                frameElements.push(await FrameElement.build(`./frame/${frameDirectoryName}/${frameDirectoryName}.html`));
            });

            viewDirectories.forEach(async viewElementDirectoryName => {
                viewElements.push(await ViewElement.build(`${viewElementDirectoryName}`, `./view/${viewElementDirectoryName}/${viewElementDirectoryName}.html`));
            });

            console.log(frameElements);
            console.log(viewElements);

            frameElements[0].displayElement();

            


            //-----------------------------



            

            Log.trace(Context.SPAL, 'SPAL initialization process success');
        } catch(error) {
            Log.error(Context.SPAL, `Error during the initialization process: ${error}`)
        }
    }
}