import { SpalConfig } from "../type/SpalConfig.js";
import { FileReader } from "../util/FileReader.js";

const spalConfigUrl = './config/spalConfig.json'

export module SpalConfigService {

    export let spalConfig: SpalConfig;

    export const initialize = async () => {
        spalConfig = await readConfig(spalConfigUrl)
        return spalConfig;
    }
}

const readConfig = (url: string) => {
    return FileReader.readFile(url) as unknown as SpalConfig
}