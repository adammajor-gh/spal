export interface Config {
    //TODO any type is a big nono
    spalOptions:{
        general: { homepage: string, preloadMode: string };
        frame: {name: string}[];
        view: {title: string, filename: string, preload: string}[];
    }
}