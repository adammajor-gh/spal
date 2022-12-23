import { FileReader } from "../common/fileReader.js";
import { LayoutElement } from "../interface/LayoutElement.js";

export class ViewElement implements LayoutElement {
    name: string;
    title: string;
    url: string;
    content: string;
    preLoad: boolean;
    build!: Function;

    constructor (name: string, title: string, url: string, content: string, preLoad: boolean) {
        this.name = name;
        this.title = title;
        this.url = url;
        this.content = content;
        this.preLoad = preLoad;
    }

    static build(name: string, title: string, preLoad: boolean): Promise<ViewElement> {
        return new Promise (async (resolve, reject) => {
            const url = `./view/${name}/${name}.html`;
            const content = await FileReader.read(url) as string;
            resolve(new ViewElement(name, title, url, content, preLoad));
        })
    }
}