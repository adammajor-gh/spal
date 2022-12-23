import { ViewElement } from "../class/ViewElement.js";
import { Config, ViewElementConfig } from "../type/Config.js";

export module View {
    function createViewElement(viewElementConfig: ViewElementConfig): Promise<ViewElement> {
        return new Promise(async (resolve, reject) => {
            const tempViewElement: ViewElement = await ViewElement.build(viewElementConfig.name, viewElementConfig.title, viewElementConfig.preload);
            resolve(tempViewElement);
        })
    }
    
    export function read(viewElementName: string, config: Config): Promise<ViewElement>{
        return new Promise((resolve, reject) => {
            let viewElementConfig: ViewElementConfig = config.spalOptions.view.find(viewElementConfig => viewElementConfig.name = viewElementName) as ViewElementConfig;
            resolve(createViewElement(viewElementConfig));
        })
    }
    
    export function readAll(config: Config): Promise<ViewElement[]> {
        return new Promise((resolve, reject) => {
            let viewElements: Promise<ViewElement>[] = []
            viewElements.push(createViewElement(config.spalOptions.view.find(viewElementConfig => viewElementConfig.name != config.spalOptions.general.homeName) as ViewElementConfig));
            resolve(Promise.all(viewElements));
        })
    }
}