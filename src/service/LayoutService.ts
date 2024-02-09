import { Layout } from "../class/Layout.js";
import { Context } from "../enum/Context.js";
import { Log } from "../util/Log.js";

const layoutUrl = './layout/layout.html';

export module LayoutService {

    export const initialize = () => {
        try {
            Log.trace(Context.SPAL, 'Attemt to initialize Layout service');
            generateMainLayout();
            Log.trace(Context.SPAL, 'Generate main layout service success');
        } catch (error) {
            Log.error(Context.SPAL, `Error during initialize the Layot service: ${error}`);
        }
        
    }

    const generateMainLayout = async () => {
        try {
            Log.trace(Context.SPAL, 'Attemt to generate main layout');
            const spalApp: HTMLElement = document.querySelector('spal-app') as HTMLElement;
            const layout: Layout = await Layout.build(layoutUrl, spalApp) as unknown as Layout;
            layout.displayElement();
            Log.trace(Context.SPAL, 'Main layout generate success');
        } catch (error) {
            Log.error(Context.SPAL, `Error during generate main layout: ${error}`);
        }
    }
}