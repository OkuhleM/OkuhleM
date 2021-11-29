---
Layout:
Title:	"React Components"
Date:	2021-11-19
Categories:

---

# Introduction

Today I'll be talking about react's components and why
you should use them.

# Body
## What is a React Component?

* A component is an independent, reusable code block, which divides the UI into smaller pieces.
  - Components help keep your code clean.
* dividing the source code into components helps us a lot. Each component has its own JS and CSS
 code, they are reusable, easier to read, write and test.
* React has 2 types of components: Functional (Stateless) and Class (Stateful).

## Functional (Stateless) Components
A functional component is a Javascript(ES6) function which returns a react Element.
 - Functional components are also known as stateless components because, in the past, we couldn’t do more complex things like React State (data) management or life-cycle methods in functional components.
However, React introduced React Hooks in version 16.8, which now allows us to use state & other features in functional components

## Class (Stateful) Components
They are more complex than functional components including constructors, life-cycle methods, render( ) function and state (data) management. 
  - is an ES6 class, will be a component once it ‘extends’ React component.
  - can accept props (in the constructor) if needed
  - can maintain its own data with state
  - must have a render( ) method which returns a React element (JSX), or null

# Conclusion
Components are useful when you want to re-use your code but don't want your code to be messy.
Components help keep your code clean and understandable.