import { FrameElement } from './spal/class/FrameElement.js';
import { Config } from './spal/type/Config.js';
import { FileReader } from './spal/common/fileReader.js';
import { ViewElement } from './spal/class/ViewElement.js';
import { logger } from './spal/common/logger.js';
import { Display } from './spal/common/display.js';
import { Scanner } from './spal/common/scanner.js';
import { Frame } from './spal/service/frame.js';
import { View } from './spal/service/view.js';
import { ViewChanger } from './spal/service/viewChanger.js';

//init process

async function init() {
    //read config
    let config: Config = await FileReader.read('./spalconfig.json') as Config;

    //turn on the logger
    logger.isSuppressWarning = config.spalOptions.general.isSuppressWarning;
    logger.isDebugMode = config.spalOptions.general.isDebugMode;

    //scan the index.html layout
    let layoutNodeList: NodeListOf<Element> = Scanner.layoutScan();

    //read all frame.html files
    let frameElements: FrameElement[] = await Frame.readAll(config);

    //display the frames in the layout's frame section
    Display.frame(layoutNodeList, frameElements);
    
    //read the homepage name from the config
    let homeName = config.spalOptions.general.homeName;

    //init a lis for the views
    let viewElements: ViewElement[] = [];

    //read the home view
    viewElements.push(await View.read(homeName, config));

    //display the home view
    Display.view(viewElements[0]);

    //scane the viewchangers on the home view
    let viewChangers: NodeListOf<Element> = Scanner.viewChangerScan();

    //read all views (except the home view) and fill the list
    viewElements = viewElements.concat(await View.readAll(config));

    //add event listeners to the home view's viewchangers'
    ViewChanger.addAll(viewChangers, viewElements);
    
}

init();