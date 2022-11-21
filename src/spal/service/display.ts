import { FrameElement } from "../class/FrameElement";

export function display(layout: Node, content: string) {
    document.querySelector('#spal-layout-header')!.innerHTML = content;
}

export function frame(layoutNodeList: NodeList, frameElements: FrameElement[]) {
    layoutNodeList.forEach((layoutNode: Node) => {
        console.log(layoutNode.baseURI)
    })
}