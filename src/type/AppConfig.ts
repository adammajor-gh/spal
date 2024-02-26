import { DevMode } from "../enum/DevMode.js"

export type AppConfig = {
    mode: {
        appDevMode: DevMode
        appPreloadMode: string
    }
}