import { Context } from "../enum/Context.js";
import { LayoutElement } from "../interface/LayoutElement.js";
import { Log } from "../util/Log.js";
import { FileReader } from "../util/FileReader.js";

export class ViewElement implements LayoutElement {

    private readonly name: string;
    private readonly layoutElementTagName: string;
    private readonly title: string;
    private readonly url: string;
    private readonly content: string;

    constructor (name: string, layoutElementTagName: string, title: string, url: string, content: string) {
        this.name = name;
        this.layoutElementTagName = layoutElementTagName;
        this.title = title
        this.url = url;
        this.content = content;
    }

    getName(): string {
        return this.name;
    }
    getLayoutElementTagName(): string {
        return this.layoutElementTagName;
    }
    getTitle(): string {
        return this.title;
    }
    getUrl(): string {
        return this.url;
    }
    getContent(): string {
        return this.content;
    }

    static build(title: string, url: string): Promise<ViewElement> {
        Log.debug(Context.SPAL, `Attemt to build a new View element from: ${url}`);
        return new Promise (async (resolve) => {
            const name = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
            const layoutElementTagName = 'spal-view';
            Log.debug(Context.SPAL, `New View element name: ${name}`);
            const content = await FileReader.readFile(url);
            resolve(new ViewElement(name, layoutElementTagName, title, url, content));
        })
    }
}