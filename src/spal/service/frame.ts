//Class imports
import { FrameElement } from '../class/FrameElement.js';

//Function imports
import { readFile } from '../common/fileReader.js'

export function readAll(frameConfig: {name: string}[]): FrameElement[]{
    let frameElements: FrameElement[] = [];
    frameConfig.forEach(async (frameElementConfig: {name: string}) => {
        frameElements.push(new FrameElement(
            frameElementConfig.name, 
            `./frame/${frameElementConfig.name}/${frameElementConfig.name}.html`, 
            await readFile(`./frame/${frameElementConfig.name}/${frameElementConfig.name}.html`)
            ));
    })
    return frameElements;
}