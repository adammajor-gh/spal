import { Context } from "../enum/Context.js";
import { Log } from "../util/Log.js";
import { AppConfigUtil } from "../util/AppConfig.js";
import { AppStateService } from "./AppStateService.js";
import { LoggerService } from "./LoggerService.js";
import { SpalConfigUtil } from "../util/SpalConfig.js";
import { SpalStateService } from "./SpalStateService.js";
import { SpalConfig } from "../type/SpalConfig.js";
import { AppConfig } from "../type/AppConfig.js";
import { DirectoryReader } from "../util/DirectoryReader.js";
import { FrameElement } from "../class/FrameElement.js";
import { ViewElement } from "../class/ViewElement.js";

export module Initializer {
    export const run = async () => {

        Log.trace(Context.SPAL, 'SPAL initialization process started');

        try{
            const spalConfig: SpalConfig = await SpalConfigUtil.initialize() as SpalConfig;
            await SpalStateService.initialize(spalConfig);

            LoggerService.initialize();

            const appConfig: AppConfig = await AppConfigUtil.initialize() as AppConfig;
            await AppStateService.initialize(appConfig);


            //This is cheatsheet for test purpose
            const frameDirectoryNames: string[] = await DirectoryReader.readDirectoryContent('./frame');
            const viewDirectoryNames: string[] = await DirectoryReader.readDirectoryContent('./view');


            //This is how you need to deal with multiple promises in an array
            const generateFrames = (frameDirectoryNames: string[]) => {
                    let frameElements: FrameElement[] = [];
                    frameDirectoryNames.forEach(async frameDirectoryName => {
                        const frameElement = FrameElement.build(`./frame/${frameDirectoryName}/${frameDirectoryName}.html`) as unknown as FrameElement;
                        frameElements.push(frameElement);
                    });
                    return Promise.all(frameElements);
            }

            const generateViews = (viewDirectoryNames: string[]) => {
                let viewElements: ViewElement[] = [];

                viewDirectoryNames.forEach(viewDirectoryName => {
                    const viewElement = ViewElement.build(viewDirectoryName, `./view/${viewDirectoryName}/${viewDirectoryName}.html`) as unknown as ViewElement;
                    viewElements.push(viewElement);
                });
                return Promise.all(viewElements);
            }
            
            const frameElements: FrameElement[] = await generateFrames(frameDirectoryNames) as FrameElement[];
            const viewElements: ViewElement[] = await generateViews(viewDirectoryNames) as ViewElement[];

            console.log(frameElements[0]);
            console.log(viewElements[0]);
            //-----------------------------



            

            Log.trace(Context.SPAL, 'SPAL initialization process success');
        } catch(error) {
            Log.error(Context.SPAL, `Error during the initialization process: ${error}`)
        }
    }
}