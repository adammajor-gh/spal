//TODO: Any return type is very bad practice!!!!

export function readFile(url: string): Promise<any> {
  const extension: string = url.substring(url.lastIndexOf('.') + 1);
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      switch(extension) {

        case 'json' : 
          return response.json() 
          break;

        case 'html' : 
          return response.text();
          break;
      }
    })
}