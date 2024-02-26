import { DevMode } from "../enum/DevMode.js"
import { PreloadMode } from "../enum/PreloadMode.js"

export type AppConfig = {
    mode: {
        appDevMode: DevMode
        appPreloadMode: PreloadMode
    }
}