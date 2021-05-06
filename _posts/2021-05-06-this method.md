---
Layout:
Title:	"Daily Report about this method"
Date:	2021-04-06
Categories:

---

# Introduction
today I dealt with functional programming and focused on this method.

# Body

A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.
In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.


> Value
A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

> Global context
In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

>> Function context

Inside a function, the value of this depends on how the function is called.
Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser.

                   function f1() {
  return this;
}

// In a browser:
f1() === window; // true

// In Node:
f1() === globalThis; // true

    >>Class context

The behavior of this in classes and functions is similar, since classes are functions under the hood. But there are some differences and caveats.
Within a class constructor, this is a regular object. All non-static methods within the class are added to the prototype of this:

# Conclusion

In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:

> this with a getter or setter
Again, the same notion holds true when a function is invoked from a getter or a setter. A function used as getter or setter has its this bound to the object from which the property is being set or gotten.