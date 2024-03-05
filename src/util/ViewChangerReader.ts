import { ViewChanger } from "../class/ViewChanger.js";

export module ViewChangerReader {
    export const scan = (): ViewChanger[] => {
        const viewChnagers: ViewChanger[] = []
        const htmlElements =  document.querySelectorAll('[spal-viewchanger]') as unknown as HTMLElement[];

        htmlElements.forEach(htmlElement => {
            viewChnagers.push(new ViewChanger(htmlElement.getAttribute('spal-viewchanger') as string))
        });

        return viewChnagers;
    }
}