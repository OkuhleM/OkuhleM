---
Layout:
Title:	"default props"
Date:	2021-09-01
Categories:

---

# Introduction
today I dealt with default props

# Body
The defaultProps is a React component property that allows you to set default values for the props argument. If the prop property is passed, it will be changed. The defaultProps can be defined as a property on the component class itself, to set the default props for the class.

Well, components are the main tools we use to build an interactive UI with. All React applications have a root component, often called the App component.React provides ways for components to pass data to each other and to respond to each other’s events.
You can write a component and use it as a child component in several other components — they were designed to be self-contained and loosely coupled for this purpose.

Build faster by making your components reusable out-of-the-box, and collaborate as a team to share and discover components. No refactoring or configurations needed, just share components and build truly modular apps.
React components take inputs in the props argument.

All attributes attached to a component in React is passed in the props object to the child component.
The child component will access them from the props object with the attribute name serving as the key.
the parent component doesn’t pass all the attributes the child component renders.
For some reasons, we might decide not to pass some props but whatever might be our reason we wouldn’t want to see undefined in our app!! It will look suspicious to our user that our app is breaking

To solve this issue, we can use the logical operator || to set a fallback value, so when a prop is missing it displays the fallback value in place of the missing prop.

# Conclusion

defaultProps is a property in React component used to set default values for the props argument. It will be changed if the prop property is passed.
defaultProps can be defined as a property on the component class itself, to set the default props for the class.