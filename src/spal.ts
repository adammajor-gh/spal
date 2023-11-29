import { Context } from "./enum/Context.js";
import { Initializer } from "./service/InitializerService.js";
import { Log } from "./util/Log.js";

Log.info(Context.SPAL, 'SPAL Framework started')
try {
    //TODO make this async
    Initializer.run();
    //Log.info(Context.SPAL, 'SPAL Framework running')
} catch (error) {
    Log.error(Context.SPAL, `Error during the SPAL start process: ${error}`);
}