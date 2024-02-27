export module ViewChanger {
    export const scan = ():NodeList => {
        const elements: NodeList = document.querySelectorAll('[spal-viewchanger]') as NodeList;
        return elements
    }
}