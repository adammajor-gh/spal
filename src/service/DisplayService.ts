import { Context } from "../enum/Context.js";
import { Log } from "../util/Log.js";

export module DisplayService {
    export const displayLayoutElement = (name: string, content: string, targetHtmlElement: HTMLElement) => {
        Log.debug(Context.SPAL, `Attempt to display ${name} at ${targetHtmlElement.tagName}`);
        try {
            targetHtmlElement.innerHTML = content;
            Log.debug(Context.SPAL, `${name} displayed successfully in ${targetHtmlElement.tagName}`);
        } catch (error) {
            Log.error(Context.SPAL, `Error, whilse displaying ${name} at ${targetHtmlElement.tagName}, error: ${error}`);
        }
    }
}