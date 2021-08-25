---
Layout:
Title:	"prevent default"
Date:	2021-08-25
Categories:

---

# Introduction
today I'll be talking about prevent event default.

# Body

a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
Why is a form submit reloading the browser? All native HTML elements come with their internal native behavior. For instance, input elements store their internal state. That's why often React is used to take over for having controlled components by managing the state via React. The same applies for a form element which has a submit event that is invoked via a submit button element.

In the past, it was desired to refresh the browser to flush all state and to submit the data to a backend. Nowadays, a library such as React, gives us more flexibility to deal with the submit event ourselves.
The event argument passed into handleClick is React’s own Synthetic event. It will always get send into your event handler function.
React’s Synthetic events are basically wrappers around the native DOM events. They are helper functions created to make sure the events have consistent properties across different browsers.
But since Synthetic events are just wrappers, the internal default behavior of the DOM object will still be triggered. One problem with the native DOM events is that it sometimes triggers a behavior that we don’t need.

Because of the default DOM event behavior, the handleSubmit function will be ignored and your log will not get written on the console.
Because of the default DOM event behavior, the handleSubmit function will be ignored and your log will not get written on the console.

# Conclusion

So it is preferred to use it on onClick method. It'll stop a form from automatically submitting the form. e. preventDefault is used when you want to stop actual action of thing.