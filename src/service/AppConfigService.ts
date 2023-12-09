import { Context } from "../enum/Context.js";
import { AppConfig } from "../type/AppConfig.js";
import { FileReader } from "../util/FileReader.js";
import { Log } from "../util/Log.js";

const appConfigUrl = './config/appConfig.json'
let appConfig: AppConfig;
export module AppConfigService {

    export const initialize = async () => {

        Log.trace(Context.SPAL, 'App config service initialization process started');

        try{
            appConfig = FileReader.readFile(appConfigUrl) as unknown as AppConfig;
            Log.trace(Context.SPAL, 'App config service initialization process success');
            return appConfig;
        } catch (error) {
            Log.error(Context.SPAL, `Error during the App config Service initialization process: ${error}`);
            return appConfig;
        }
    }
}