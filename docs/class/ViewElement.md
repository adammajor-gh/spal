# Property summary
>### name: string
>Represents the view element's name.

>## title: string
>Represents the view element's title.

>### url: string
>Represents the view element's relative url.

>### content: string
>Represents the view element's content.

>### preload: boolean
>Represets the view element's preload functionality.

>### build: Function
>Represents the view element's build() method.

# Constructor summary
>### constructor(name: string, title: string, url: string, content: string, preLoad: boolean)
>Creates a view element with the specified name, title, relative url, content and preload functionality.

# Method summary
>### build(name: string): Promise<ViewElement>
>Create and return a Promise<ViewElement> type object with the specified name, title and preload functionality.
>This method is required, because the JS/TS can't support async operations inside the constructor.