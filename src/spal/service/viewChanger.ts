import { ViewElement } from "../class/ViewElement.js";
import { Display } from "../common/display.js";
import { Scanner } from "../common/scanner.js";
import { Title } from "../common/title.js";

export module ViewChanger {
    export function addAll(viewChangers: NodeListOf<Element>, viewElements: ViewElement[]) {
        Array.from(viewChangers).forEach(viewChanger => {
            document.querySelector(`#${viewChanger.id}`)?.addEventListener('click', function handleClick(event) {
    
                let viewName: String = viewChanger.id.substring(viewChanger.id.lastIndexOf('-') + 1);
    
                let viewElement: ViewElement = viewElements.find(viewElement => viewElement.name === viewName)!
                
                Display.view(viewElement);

                Title.change(viewElement);
                
                let viewChangers: NodeListOf<Element> = Scanner.viewChangerScan();
               
                addAll(viewChangers, viewElements);
            })
        })
    }
}


