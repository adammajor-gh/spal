export type Config = {
    spalOptions:{
        general: { 
            homeName: string,
            preloadMode: string,
            isSuppressWarning: boolean,
            isDebugMode: boolean
        };
        frame: {
            name: string
        }[];
        view: {
            name: string,
            title: string,
            preload: boolean
        }[];
    }
}

export type FrameElementConfig = {
    name: string;
}

export type ViewElementConfig = {
    name: string,
    title: string,
    preload: boolean
}