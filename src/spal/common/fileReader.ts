import { logger } from "./logger.js";
import { FileContent } from "../type/FileContent.js";

export module FileReader {
  export function read(url: string): Promise<FileContent> {
    return new Promise((resolve, reject) => {
      const extension: string = url.substring(url.lastIndexOf('.') + 1);
      return fetch(url)
        .then(response => {
  
          if (!response.ok) {
            logger.log('error',`file not found: "${url}"`);
          }
    
          switch(extension) {
            case 'json' :
              logger.log('debug', `file readed from: ${url}`);
              resolve(response.json() as object); 
              break;
    
            case 'html' :
              logger.log('debug', `file readed from: ${url}`) ;
              resolve(response.text() as unknown as string);
              break;
  
            default :
              logger.log('error', `not supported file ${url}`);
              break;
          }
        })
    })
  }
}

