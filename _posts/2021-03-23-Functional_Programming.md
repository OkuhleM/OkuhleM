---
Layout:
Title:	"Daily Report"
Date:	2021-03-23
Categories:

---

# Introduction
I have just started a new topic called Functional Programming.

# Body
## Functional Programming

Functional programming is a style of programming where solutions are simple,
isolated functions, without any side effects outside of the function scope.

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Pure functions - the same input always gives the same output

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

Callbacks are the functions that are slipped or passed into another 
function to decide the invocation of that function. 
first class functions - Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value
In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called higher order functions.
When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.
Functional Programming keeps your code easy to manage, and saves you from sneaky bugs.

An imperative style in programming is one that gives the computer a set of statements to perform a task.
A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.
JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.

# Conclusion
Tomorrow I'll carry on with this topic.so far this is where I ended.