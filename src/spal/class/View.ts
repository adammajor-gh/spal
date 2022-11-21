import { LayoutElement } from "../interface/LayoutElement";

class View implements LayoutElement {
    name: string;
    url: string;
    content: string;
    preLoad: boolean

    constructor (name: string, url: string, content: string, preLoad: boolean) {
        this.name = name;
        this.url = url;
        this.content = content;
        this.preLoad = preLoad;
    }
}