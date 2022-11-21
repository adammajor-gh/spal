import * as frame from './spal/service/frame.js'
import { layoutScan } from './spal/common/layoutScanner.js'
import { FrameElement } from './spal/class/FrameElement.js';
import { Config } from './spal/interface/Config.js';
import { readFile } from './spal/common/fileReader.js';
import * as display from './spal/service/display.js'


//init process
let layoutNodeList: NodeList = layoutScan();
let config: Config = await readFile('./spal/config/spalconfig.json');
let frameElements: FrameElement[] = frame.readAll(config.spalOptions.frame);
display.frame(layoutNodeList, frameElements);
console.log(frameElements)
