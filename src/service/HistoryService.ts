import { Context } from "../enum/Context.js"
import { Log } from "../util/Log.js"

export module HistoryService {
    export const pushState = (title: string, path: string, state: Object) => {
        Log.debug(Context.SPAL, `Attemt to push new state: ${title}; path: ${path}`);
        try {
            history.pushState(state, title, path);
            Log.debug(Context.SPAL, `New state pushed successful, ${title}; path: ${path}`);
        } catch (error) {
            Log.error(Context.SPAL, `Error during push state, ${title}; ${path}; error: ${error}`);
        }
    }
}