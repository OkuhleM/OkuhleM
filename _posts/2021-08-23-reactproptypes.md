---
Layout:
Title:	"React proptypes"
Date:	2021-08-23
Categories:

---

# Introduction

today I'll be talking about proptypes

# Body

You can use prop-types to document the intended types of properties passed to components. React will check props passed to your components against those definitions, and warn in development if they don’t match.
PropTypes was originally exposed as part of the React core module, and is commonly used with React components. 
When you migrate components to use the standalone prop-types, all validator functions will start throwing an error if you call them directly. This makes sure that nobody relies on them in production code, and it is safe to strip their implementations to optimize the bundle size.

React will automatically check the propTypes you set on the component, but if you are using PropTypes without React then you may want to manually call PropTypes.checkPropTypes.
React props, which stands for “properties,” are used to send data from one component to another. If a component receives the wrong type of props, it can lead to bugs and unexpected errors in your app.
Since JavaScript doesn’t have a built-in type-checking solution, many developers use extensions such as TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes.

React props allow you to send data — including numbers, strings, functions, objects, arrays, etc. — to a component when you call on that component. If you have multiple components, you can pass data from one component to another.
To pass props between components, you would add them when the component is called, just as you would pass arguments when calling on a regular JavaScript function.

# Conclusion

Props and PropTypes are important mechanisms for passing read-only attributes between React components.
When developing a React application, you might encounter the need for a prop to be structured and defined to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. If you forget to pass a required prop into a component that needs it, it could cause your app to behave unexpectedly.