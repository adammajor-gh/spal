import { Context } from "../enum/Context.js";
import { Log } from "./Log.js";

export module FileReader {

    let extension: string;
    let readedFileContent: any;

    export const readFile = async (url: string) => {

        Log.trace(Context.SPAL, 'Attempt file reading')

        try {
            extension = url.substring(url.lastIndexOf('.') + 1);
            Log.debug(Context.SPAL, `Detected file extension: ${extension}`);
        } catch (error) {
            Log.error(Context.SPAL, `Error while defining the file's extension: ${error}`);
        }
        
        try {
            switch (extension) {
                case 'json': {
                    readedFileContent = await readJson(url) as object;
                    return readedFileContent;
                }
    
                case 'html': {
                    readedFileContent = await readHtml(url) as string;
                    return readedFileContent;
                }
    
                default:
                    Log.error(Context.SPAL, `Invalid file extension at : ${url}; extension: ${extension}`);
            }
        } catch (error) {
            Log.error(Context.SPAL, `Error during the file reading: ${error}`);
        }
    }
}

const readJson = (url: string): Promise<object> => {
    return new Promise((resolve) => {
        Log.debug(Context.SPAL, `Attempting JSON file read at: ${url}`);
        fetch(url).then(response => {
            try {
                resolve(response.json());
            } catch (error) {
                Log.error(Context.SPAL, `Error during JSON file reading: ${error}`);
            }
        })
    })
}

const readHtml = (url: string): Promise<string> => {
    return new Promise((resolve) => {
        Log.debug(Context.SPAL, `Attempting HTML file read at: ${url}`);
        fetch(url).then(response => {
            try {
                resolve(response.text());
            } catch (error) {
                Log.error(Context.SPAL, `Error during HTML file reading: ${error}`);
            }
        })
    })
}