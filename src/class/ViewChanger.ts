export class ViewChanger {
    private readonly name: string
    private url: string | undefined

    constructor (name: string, url?: string) {
        this.name = name;
        this.url = url;
    }

    public getName(): string {
        return this.name;
    }

    public getUrl(): string | undefined {
        return this.url;
    }

    public setUrl (url: string) {
        this.url = url
    }
}