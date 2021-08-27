---
Layout:
Title:	"day summary"
Date:	2021-08-27
Categories:

---

# Introduction

today I did rendering in react.

# Body

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.
React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
Even though we create an element describing the whole UI tree on every tick, only the text node whose contents have changed gets updated by React DOM.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.
You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.
While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX

# Conclusion

You may embed expressions in JSX by wrapping them in curly braces.
if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. 