export module FileReader {

    export const readFile = async (url: string) => {

        let readedFileContent: object | string
        const extension: string = url.substring(url.lastIndexOf('.') + 1);

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
                return 'unknownFileFormat'
        }
    }
}

const readJson = (url: string): Promise<object> => {
    return new Promise((resolve) => {
        fetch(url).then(response => {
            resolve(response.json());
        })
    })
}

const readHtml = (url: string): Promise<string> => {
    return new Promise((resolve) => {
        fetch(url).then(response => {
            resolve(response.text());
        })
    })
}