---
Layout:
Title:	"Differences between Functional Components and Class Components in React"
Date:	2021-08-30
Categories:

---

# Introduction

today I did React from scratch.
I looked at the difference between functional React and Class React.

# Body

Functional Components: Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.

Class Component: This is the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application).

A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.
A class component requires you to extend from React. Component and create a render function which returns a React element.
There is no render method used in functional components.
Class must have the render() method returning HTML.
Functional Components: Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
Class component: Also known as Stateful components because they implement logic and state.
React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
React lifecycle methods can be used inside class components (for example, componentDidMount).

# Conclusion

In the world of React, there are two ways of writing a React component. One uses a function and the other uses a class. Recently functional components are becoming more and more popular.
A functional component is a function that returns JSX.
when defining a class component, you have to make a class that extends React.Component. The JSX to render will be returned inside the render method.