import { Context } from "../enum/Context.js";
import { SpalConfig } from "../type/SpalConfig.js";
import { FileReader } from "./FileReader.js";
import { Log } from "./Log.js";

const spalConfigUrl = './config/spalConfig.json'
let spalConfig: SpalConfig;
export module SpalConfigUtil {

    export const initialize = async () => {

        Log.trace(Context.SPAL, 'SPAL config service initialization process started');

        try{
            spalConfig = FileReader.readFile(spalConfigUrl) as unknown as SpalConfig;
            Log.trace(Context.SPAL, 'SPAL config service initialization process success');
            return spalConfig;
        } catch (error) {
            Log.error(Context.SPAL, `Error during the SPAL config Service initialization process: ${error}`);
            return spalConfig;
        }
    }
}