import { LayoutElement } from "../interface/LayoutElement.js";
import { FileReader } from "../util/FileReader.js";
import { HtmlElementUtil } from "../util/HtmlElement.js";
import { DisplayService } from "../service/DisplayService.js";
import { Context } from "../enum/Context.js";
import { Log } from "../util/Log.js";
import { TitleService } from "../service/TitleService.js";

export class ViewElement implements LayoutElement {

    private readonly name: string;
    private readonly targetHtmlElement: HTMLElement;
    private readonly title: string;
    private readonly url: string;
    private readonly content: string;

    constructor (name: string, title: string, targetHtmlElement: HTMLElement, url: string, content: string) {
        this.name = name;
        this.targetHtmlElement = targetHtmlElement;
        this.title = title
        this.url = url;
        this.content = content;
    }

    getName(): string {
        return this.name;
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

    displayElement() {
        try {
            DisplayService.displayLayoutElement(this.name, this.content, this.targetHtmlElement);
        } catch (error) {
            Log.error(Context.SPAL, `Error during view element displaying: ${error}`);
        }
    }

    displayTitle() {
        try {
            TitleService.displayTitle(this.title);
        } catch (error) {
            Log.error(Context.SPAL, `Error during displaying the title: ${this.title}; error: ${error}`);
        }
    }

    static build(title: string, url: string): Promise<ViewElement> {
        return new Promise (async (resolve) => {
            Log.debug(Context.SPAL, `Attemt to create new View Element: ${title}`);
            try {
                const name = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
                const targetHtmlElementName = 'spal-view';
                const targetHtmlElement: HTMLElement = HtmlElementUtil.getHtmlElementByName(targetHtmlElementName); 
                const content = await FileReader.readFile(url);
                const viewElement = new ViewElement(name, title, targetHtmlElement, url, content)
                Log.debug(Context.SPAL, `New view element created: ${title}`);
                resolve(viewElement);
            } catch (error) {
                Log.error(Context.SPAL, `Error while createing a new View Element: ${title}`);
            }
        })
    }
}