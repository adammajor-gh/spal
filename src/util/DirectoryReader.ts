import { Context } from "../enum/Context.js";
import { Log } from "./Log.js";

export module DirectoryReader {
    export const readDirectoryContent = async (url: string): Promise<string[]> => {
        try {
            let readedDirectory = await fetchDirectory(url) as string;
            return getDirectoryList(readedDirectory);
        } catch (error) {
            Log.error (Context.SPAL, `Error during read the directory content: ${error}`);
            return [];
        }
    }
}

const fetchDirectory = (url: string): Promise<string> => {
    return new Promise((resolve) => {
        fetch(url).then(response => {
            try {
                resolve(response.text());
            } catch (error) {
                Log.error(Context.SPAL, `Error during fetch the directory: ${error}`);
            }
        })
    })
}

const getDirectoryList = (htmlResponse: string): string[] => {
    try {
        const regExpt = /(?<="><span class="name">)\w+(?=<\/span><span class="size"><\/span><span class="date".+<\/span><\/a><\/li>)/g
        return htmlResponse.match(regExpt) as unknown as string[];
    } catch (error) {
        Log.error(Context.SPAL, `Error during retrieve the directory list from the fetch response: ${error}`);
        return [];
    }
}