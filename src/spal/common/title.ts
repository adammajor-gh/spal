import { ViewElement } from "../class/ViewElement";
import { logger } from "./logger.js";

export module Title {
    export function change(viewElement: ViewElement) {
        document.title = viewElement.title;
        logger.log('debug', `page's title changed to: ${viewElement.title}`);
    }
}