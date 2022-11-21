import { LayoutElement } from "../interface/LayoutElement.js";

export class FrameElement implements LayoutElement {
    name: string;
    url: string;
    content: string;

    constructor (name: string, url: string, content: string) {
        this.name = name;
        this.url = url;
        this.content = content;
    }
}