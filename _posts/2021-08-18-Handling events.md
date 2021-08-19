---
Layout:
Title:	"Handling events"
Date:	2021-08-18
Categories:

---

# Introduction

Today I did handling events

# Body

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.
Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. 
When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.
 In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.
 This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

 # Conclusion

 The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

