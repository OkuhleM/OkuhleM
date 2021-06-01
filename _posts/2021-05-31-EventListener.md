---
Layout:
Title:	"Event Listener"
Date:	2021-05-31
Categories:

---

# Introduction

I was doing the project that Moral gave us which is the Recipe Box.
As I was doing it, I couldn't make my submit button click and submit information in the form.
So I will be talking about the eventListener.

# Body

- The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the   target. Common targets are Element, Document, and Window, but the target may be any object that supports events 

- addEventListener() works by adding a function or an object that implements EventListener to the list of event listeners for the specified event type on the EventTarget on which it's called.

      Syntax
target.addEventListener(type, listener);
target.addEventListener(type, listener, options);
target.addEventListener(type, listener, useCapture);
target.addEventListener(type, listener, useCapture, wantsUntrusted); // wantsUntrusted is Firefox only

- Parameters
* type
A case-sensitive string representing the event type to listen for.
* listener
The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or a JavaScript function. See The event listener callback for details on the callback itself.
* options 
An options object specifies characteristics about the event listener. The available options are:
capture
A Boolean indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
once
A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
* passive
A Boolean that, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning. See Improving scrolling performance with passive listeners to learn more.
* signal
An AbortSignal. The listener will be removed when the given AbortSignal’s abort() method is called.

# Conclusion

The event listener can be specified as either a callback function or an object that implements EventListener, whose handleEvent() method serves as the callback function.

The callback function itself has the same parameters and return value as the handleEvent() method; that is, the callback accepts a single parameter: an object based on Event describing the event that has occurred, and it returns nothing.