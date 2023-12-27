import { Context } from "../enum/Context.js";
import { Log } from "./Log.js";

export module HtmlElementUtil {
    export const getHtmlElementByName = (targetHtmlElementName: string): HTMLElement => {

        Log.debug(Context.SPAL, `Attemt to search HTML tag: ${targetHtmlElementName}`);

        try {
            let targetHtmlElement: HTMLElement = document.querySelector(targetHtmlElementName)!;
            Log.debug(Context.SPAL, `HTML element retrieved: ${targetHtmlElementName}`);
            return targetHtmlElement;
        } catch (error) {
            Log.error(Context.SPAL, `Error during retreiver HTML element, name: ${targetHtmlElementName}, error: ${error}`);
            return null as unknown as HTMLElement;
        }
    }
}