import { Context } from "./enum/Context.js";
import { Initializer } from "./service/InitializerService.js";
import { Log } from "./util/Log.js";

Log.info(Context.SPAL, 'SPAL Framework started')
Initializer.run();
Log.info(Context.SPAL, 'SPAL Framework running')