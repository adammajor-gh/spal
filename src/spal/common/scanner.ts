import { logger } from "./logger.js";

export module Scanner {
    export function layoutScan(): NodeListOf<Element> {
        let layouts: NodeListOf<Element> = document.querySelectorAll('[id^="spal-layout"]');
        logger.log('debug', 'layouts scanned');
        return layouts;
    }
    
    export function viewChangerScan(): NodeListOf<Element> {
        let viewChangers: NodeListOf<Element> = document.querySelectorAll('[id^="spal-vc"]');
        logger.log('debug', 'view changers scanned');
        return viewChangers;
    }
}