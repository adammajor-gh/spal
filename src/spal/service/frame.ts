import { Config, FrameElementConfig } from '../type/Config.js';
import { FrameElement } from '../class/FrameElement.js';
import { logger } from '../common/logger.js';

export module Frame {
    function createFrameElement(frameElementConfig: FrameElementConfig): Promise<FrameElement> {
        return new Promise (async (resolve, reject) => {
            const frameElement: FrameElement = await FrameElement.build(frameElementConfig.name);
            logger.log('debug', `${frameElement.name} frame element created`);
            resolve(frameElement);
        })
    }
    
    export function readAll(config: Config): Promise<FrameElement[]>{
        return new Promise((resolve, reject) => {
            let frameElements: Promise<FrameElement>[] = [];
            config.spalOptions.frame.forEach((frameElementConfig: FrameElementConfig) => {
                frameElements.push(createFrameElement(frameElementConfig));
            })
            resolve(Promise.all(frameElements));
        })
    }
}