import { Context } from "../enum/Context.js";
import { Log } from "../util/Log.js";

export module Initializer {
    export const run = () => {
        console.log('Hello SPAL!');
        Log.info(Context.SPAL, 'Hello Info Log');
        Log.trace(Context.SPAL, 'Hello Trace Log');
        Log.debug(Context.SPAL, 'Hello Debug Log');
        Log.warning(Context.SPAL, 'Hello Warning Log');
        Log.error(Context.SPAL, 'Hello Error Log');
    }
}