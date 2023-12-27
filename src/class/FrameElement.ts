import { Context } from "../enum/Context.js";
import { LayoutElement } from "../interface/LayoutElement.js";
import { FileReader } from "../util/FileReader.js";
import { Log } from "../util/Log.js";

export class FrameElement implements LayoutElement {

    private readonly name: string;
    private readonly layoutElementTagName: string;
    private readonly url: string;
    private readonly content: string;

    constructor (name: string, layoutElementTagName: string, url: string, content: string) {
        Log.debug(Context.SPAL, `Attempt to construct a new Frame element, name: ${name}; url: ${url}`);
        this.name = name;
        this.layoutElementTagName = layoutElementTagName;
        this.url = url;
        this.content = content;
        Log.debug(Context.SPAL, `New frame element construct is successfull, name: ${name}; url: ${url}`);
    }

    getName(): string {
        return this.name;
    }
    getLayoutElementTagName(): string {
        return this.layoutElementTagName;
    }
    getUrl(): string {
        return this.url;
    }
    getContent(): string {
        return this.content;
    }

    static build(url: string): Promise<FrameElement> {
        Log.debug(Context.SPAL, `Attemt to build a new Frame element from: ${url}`);
        return new Promise (async (resolve) => {
            const name = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
            const layoutElementTagName = `spal-frame-${name}`;
            Log.debug(Context.SPAL, `New Frame element name: ${name}`);
            const content = await FileReader.readFile(url);
            resolve(new FrameElement(name, layoutElementTagName, url, content));
        })
    }
}