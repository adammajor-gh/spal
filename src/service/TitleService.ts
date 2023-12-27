import { Context } from "../enum/Context.js"
import { Log } from "../util/Log.js"

export module TitleService {
    export const displayTitle = (title: string) => {
        Log.debug(Context.SPAL, `Display new title: ${title}`);
        try {
            document.title = title;
            Log.debug(Context.SPAL, `Display new title success: ${title}`);
        } catch (error) {
            Log.debug(Context.SPAL, `Error during displaying the title: ${title}; error: ${error}`);
        }
    }
}