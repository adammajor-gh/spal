import { ViewChanger } from "../class/ViewChanger.js";
import { ViewChangerReader } from "../util/ViewChangerReader.js"
import { AppStateService } from "./AppStateService.js";

export module ViewchangerService {
    export const refreshViewChangers = () => {
        const viewChnagers: ViewChanger[] = ViewChangerReader.scan();
        AppStateService.appState.setLoadedViewChangers(viewChnagers);
    }
}