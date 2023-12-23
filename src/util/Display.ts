import { Context } from "../enum/Context.js";
import { LayoutElement } from "../interface/LayoutElement.js";
import { Log } from "./Log.js";

export module Display {
    export const displayLayoutElement = (layoutElement: LayoutElement, layout: HTMLElement) => {
        Log.debug(Context.SPAL, `Attemt to display a layout element`);
        try {
            layout.innerHTML = layoutElement.getContent();
            Log.debug(Context.SPAL, `Layout element displayed successfully, name: ${layoutElement.getName()}`)
        } catch (error) {
            Log.error(Context.SPAL, `Error during display the layout element, name: ${layoutElement.getName}, error: ${error}`);
        }
    }
}