export module FileReader {

    export const readFile = async (url: string): Promise<string | object | undefined> => {

        let readedFileContent: object | string
        const extension: string = url.substring(url.lastIndexOf('.' + 1));

        switch (extension) {
            case 'json': {
                readedFileContent = await readJson(url) as object;
                return readedFileContent;
            }

            case 'html': {
                readedFileContent = await readHtml(url) as string;
                return readedFileContent;
            }

            default:
                return undefined
        }
    }
}

const readJson = (url: string) => {
    return new Promise((resolve) => {
        fetch(url).then(response => {
            resolve(response.json());
        })
    })
}

const readHtml = (url: string) => {
    return new Promise((resolve) => {
        fetch(url).then(response => {
            resolve(response.text());
        })
    })
}