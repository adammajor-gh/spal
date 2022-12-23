import { FileReader } from "../common/fileReader.js";
import { LayoutElement } from "../interface/LayoutElement.js";

export class FrameElement implements LayoutElement {
    name: string;
    url: string;
    content: string;
    build!: Function;

    constructor (name: string, url: string, content: string) {
        this.name = name;
        this.url = url;
        this.content = content;
    }

    static build(name: string): Promise<FrameElement> {
        return new Promise (async (resolve, reject) => {
            const url = `./frame/${name}/${name}.html`;
            const content = await FileReader.read(url) as string;
            resolve(new FrameElement(name, url, content));
        })
    }
}