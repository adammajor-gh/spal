import { FrameElement } from "../class/FrameElement";
import { ViewElement } from "../class/ViewElement";
import { LayoutElement } from "../interface/LayoutElement";
import { logger } from "./logger.js";

export module Display {
    function display(layoutId: string, element: LayoutElement) {
        document.querySelector(`#${layoutId}`)!.innerHTML = element.content;
    }
    
    export function frame(layoutNodeList: NodeListOf<Element>, frameElements: FrameElement[]) {
        frameElements.forEach((frameElement: FrameElement) => {
            const layoutElement: Element = Array.from(layoutNodeList).find(layoutElement => layoutElement.id.substring(layoutElement.id.lastIndexOf('-') + 1) == frameElement.name)!
            display(layoutElement.id, frameElement);
            logger.log('debug', `frame element displayed: "${frameElement.name}"`);
        })
    }
    
    export function view(viewElement: ViewElement) {
        display('spal-layout-view', viewElement);
        logger.log('debug', `view element displayed: "${viewElement.name}"`);
    }
}