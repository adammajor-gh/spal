export module logger {
    export let isSuppressWarning: boolean = false;
    export let isDebugMode: boolean = false;
    export function log(level: string, msg: string) {
        switch(level) {
            case 'debug':
                if (isDebugMode) {
                    console.debug(`DEBUG (${new Date(Date.now())}): ${msg}`);
                }
                break;
            
            case 'warning':
                if (!isSuppressWarning) {
                    console.warn(`WARNING (${new Date(Date.now())}): ${msg}`);
                }
                break;

            case 'error':
                console.error(`ERROR (${new Date(Date.now())}): ${msg}`);
                break;
        }
    }
}