# Function summary
>### addAll(viewChangers: NodeListOf<Element>, viewElements: ViewElement[])
>This function add all the given view changer elements in the nodelist an event listener.
>The event listener will invoke the Display.view() method, which display the selected view in the view layout.
>After that, scann all the view changer element in the new view and add again the event listeners to the viewchanger elements.