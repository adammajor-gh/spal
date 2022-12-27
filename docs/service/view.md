# Function summary
>### createViewElement(viewElementConfig: ViewElementConfig): Promise\<ViewElement>
>This function can build and return a view element object, based on the view element's name, title and preload functionality.

>### read(viewElementName: string, config: Config): Promise\<ViewElement>
>This function search a given view element which is in the config object, build a view element object and return it.

### readAll(config: Config): Promise\<ViewElement[]>
>This function searches all the view elements which is in the config object, build a view element object each other and return all the builded view elements in a list.