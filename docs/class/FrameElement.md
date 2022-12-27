# Property summary
>### name: string
>Represents the frame element's name.

>### url: string
>Represents the frame element's relative url.

>### content: string
>Represents the frame element's content.

>### build: Function
>Represents the frame element's build() method.

# Constructor summary
>### constructor(name: string, url: string, content: string)
>Creates a frame element with the specified name, relative url and content.

# Method summary
>### build(name: string): Promise\<FrameElement>
>Create and return a Promise\<FrameElement> type object with the specified name.
>This method is required, because the JS/TS can't support async operations inside the constructor.