export interface LayoutElement {
    getName(): string;
    getLayoutElementTagName(): string;
    getUrl(): string;
    getContent(): string;
    //TODO: need another property for the build method.
}