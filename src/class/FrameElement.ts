import { Context } from "../enum/Context.js";
import { LayoutElement } from "../interface/LayoutElement.js";
import { DisplayService } from "../service/DisplayService.js";
import { FileReader } from "../util/FileReader.js";
import { HtmlElementUtil } from "../util/HtmlElement.js";
import { Log } from "../util/Log.js";

export class FrameElement implements LayoutElement {

    private readonly name: string;
    private readonly targetHtmlElement: HTMLElement;
    private readonly url: string;
    private readonly content: string;

    constructor (name: string, targetHtmlElement: HTMLElement, url: string, content: string) {
        Log.debug(Context.SPAL, `Attempt to construct a new Frame element, name: ${name}; url: ${url}`);
        this.name = name;
        this.targetHtmlElement = targetHtmlElement;
        this.url = url;
        this.content = content;
        Log.debug(Context.SPAL, `New frame element construct is successfull, name: ${name}; url: ${url}`);
    }

    getName(): string {
        return this.name;
    }
    getUrl(): string {
        return this.url;
    }
    getContent(): string {
        return this.content;
    }

    display() {
        DisplayService.displayLayoutElement(this.name, this.content, this.targetHtmlElement); 
    }

    static build(url: string): Promise<FrameElement> {
        Log.debug(Context.SPAL, `Attemt to build a new Frame element from: ${url}`);
        return new Promise (async (resolve) => {
            const name = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
            const htmlElementTagName = `spal-frame-${name}`;
            Log.debug(Context.SPAL, `New Frame element name: ${name}`);
            const content = await FileReader.readFile(url);
            const targetHtmlElement: HTMLElement = HtmlElementUtil.getHtmlElementByName(htmlElementTagName);
            resolve(new FrameElement(name, targetHtmlElement, url, content));
        })
    }
}