---
Layout:
Title:	"React lifecycle methods"
Date:	2021-09-08
Categories:

---

# Introduction

today I was busy with react on freecodecamp and I came across React lifecycle methods.
so today I will be explaining what React lifecycle methods are.

# Body

## What are React lifecycle methods?

we can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death.
Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

> Mounting – Birth of your component
> Update – Growth of your component
> Unmount – Death of your component

* render()
The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React.
It happens during the mounting and updating of your component.
A render() method has to be pure with no side-effects.

React requires that your render() is pure. Pure functions are those that do not have any side-effects and will always return the same output when the same inputs are passed. This means that you can not setState() within a render().

* componentDidMount()
Now your component has been mounted and ready, that’s when the next React lifecycle method componentDidMount() comes in play.
componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.

Unlike the render() method, componentDidMount() allows the use of setState(). Calling the setState() here will update state and cause another rendering but it will happen before the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering.
t is recommended that you use this pattern with caution since it could lead to performance issues. The best practice is to ensure that your states are assigned in the constructor(). The reason React allows the setState() within this lifecycle method is for special cases like tooltips, modals, and similar concepts when you would need to measure a DOM node before rendering something that depends on its position.

 November 19th, 2018
Comments
React Lifecycle Methods – A Deep Dive
Have you had trouble understanding some of the React lifecycle methods and how to implement them without messing up?

Don’t worry you are not alone. When I first started coding my React app, I ran into situations where I had to take a step back and learn the React lifecycle methods before I could proceed.

Before we get started, I want you to know that the latest React versions have determined that some of the older lifecycle methods are unsafe to use and will be deprecated in React 17. In this blog post we will not learn about the soon to be deprecated unsafe lifecycle methods.

What are React lifecycle methods?
You can think of React lifecycle methods as the series of events that happen from the birth of a React component to its death.

Every component in React goes through a lifecycle of events. I like to think of them as going through a cycle of birth, growth, and death.

Mounting – Birth of your component
Update – Growth of your component
Unmount – Death of your component
Now that we understand the series of lifecycle events let’s learn more about how they work.

Common React Lifecycle Methods
render()
The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React.

As the name suggests it handles the rendering of your component to the UI. It happens during the mounting and updating of your component.
A render() method has to be pure with no side-effects.

React requires that your render() is pure. Pure functions are those that do not have any side-effects and will always return the same output when the same inputs are passed. This means that you can not setState() within a render().

You cannot modify the component state within the render().

If you do need to modify state that would have to happen in the other lifecycle methods, therefore keeping render() pure.

Furthermore, keeping your render() simple and clean without state updates makes your app maintainable.

componentDidMount()
Now your component has been mounted and ready, that’s when the next React lifecycle method componentDidMount() comes in play.

componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.

Unlike the render() method, componentDidMount() allows the use of setState(). Calling the setState() here will update state and cause another rendering but it will happen before the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering.

You can modify the component state within the componentDidMount(), but use it with caution.

It is recommended that you use this pattern with caution since it could lead to performance issues. The best practice is to ensure that your states are assigned in the constructor(). The reason React allows the setState() within this lifecycle method is for special cases like tooltips, modals, and similar concepts when you would need to measure a DOM node before rendering something that depends on its position.

* componentDidUpdate()
This lifecycle method is invoked as soon as the updating happens. The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.
You can call setState() in this lifecycle, but keep in mind that you will need to wrap it in a condition to check for state or prop changes from previous state. Incorrect usage of setState() can lead to an infinite loop.

* componentWillUnmount()
As the name suggests this lifecycle method is called just before the component is unmounted and destroyed. If there are any cleanup actions that you would need to do, this would be the right spot.
This component will never be re-rendered and because of that we cannot call setState() during this lifecycle method.

*shouldComponentUpdate()
This lifecycle can be handy sometimes when you don’t want React to render your state or prop changes.
Anytime setState() is called, the component re-renders by default. The shouldComponentUpdate() method is used to let React know if a component is not affected by the state and prop changes.
Keep in mind that this lifecycle method should be sparingly used, and it exists only for certain performance optimizations. You cannot update component state in shouldComponentUpdate() lifecycle.

# Conclusion

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
The three phases are: Mounting, Updating, and Unmounting.