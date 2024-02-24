import { Context } from "../enum/Context.js";
import { LayoutElement } from "../interface/LayoutElement.js";
import { DisplayService } from "../service/DisplayService.js";
import { FileReader } from "../util/FileReader.js";
import { Log } from "../util/Log.js";

export class Layout implements LayoutElement {

    private readonly name: string;
    private readonly targetHtmlElement: HTMLElement;
    private readonly url: string;
    private readonly content: string;

    constructor (name: string, targetHtmlElement: HTMLElement, url: string, content: string) {
        Log.debug(Context.SPAL, `Attempt to construct a new Layout, name: ${name}; url: ${url}`);
        this.name = name;
        this.targetHtmlElement = targetHtmlElement;
        this.url = url;
        this.content = content;
        Log.debug(Context.SPAL, `New Layout construct is successfull, name: ${name}; url: ${url}`);
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

    displayElement() {
        try {
            DisplayService.displayLayoutElement(this.name, this.content, this.targetHtmlElement);
        } catch (error) {
            Log.error(Context.SPAL, `Error during Layout element displaying: ${error}`);
        }
    }

    static build(url: string, targetHtmlElement: HTMLElement): Promise<Layout> {
        return new Promise (async (resolve) => {
            Log.debug(Context.SPAL, `Attempt to create new Layout: ${url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))}`);
            try {
                const name = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
                const content = await FileReader.readFile(url);
                const frameElement = new Layout(name, targetHtmlElement, url, content);
                Log.debug(Context.SPAL, `New view element created: ${name}`);
                resolve(frameElement);
            } catch (error) {
                Log.error(Context.SPAL, `Error while createing a new View Element: ${url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'))}`);
            }
        })
    }
}