import { Context } from "../enum/Context.js"
import { LayoutElementTag } from "../util/HtmlElement.js";
import { Log } from "../util/Log.js"

export module Display {
    export const displayLayoutElement = (name: string, content: string, targetHtmlElementName: string) => {
        Log.debug(Context.SPAL, `Attemt to display layout element, name: ${name}; layout element tag name: ${targetHtmlElementName}`);
        try {
            
            let targetHtmlElement: HTMLElement = LayoutElementTag.get(targetHtmlElementName);
            console.log(targetHtmlElementName);
            targetHtmlElement.innerHTML = content;
            Log.debug(Context.SPAL, `${name} displayed successfull in ${targetHtmlElementName}`);
        } catch (error) {
            Log.error(Context.SPAL, `Error during diplaying the content, name: ${name}, HTML element: ${targetHtmlElementName}`);
        }
    }
}