import { DevMode } from "../enum/Devmode"

export type AppConfig = {
    mode: {
        appDevMode: DevMode
        appPreloadMode: string
    }
}