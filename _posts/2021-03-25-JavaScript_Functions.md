---
Layout:
Title:	"Daily Report about JavaScript Functions"
Date:	2021-03-25
Categories:

---

# Introduction

Today Wongani did a present regarding the introduction of JavaScript.
He talked about Variables, Functions and if statements but I'll
talk about the functions.

# Body
## What is a function?

A function is a block of code designed to perform a certain task.
this function will be executed when it has been envoked or called.

## JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed
by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)
The code to be executed, by the function, is placed inside curly brackets: {}

For Example:
   
   function addingNumbers(param1, param2) { 
     // code to be executed
   }
   - you can use a console.log to test if your function works.

Function parameters are listed inside the parentheses () where you have to define the function.
Function arguments are the values received by the function when it is invoked or called.
Inside the function, the arguments (the parameters) behave as local variables.

## Function Invocation

The code inside the function will execute when "something" invokes (calls) the function:
- When an event occurs (when a user clicks a button).
- When it is invoked (called) from JavaScript code.
- Automatically (self invoked).

## Function Return
When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
Functions often compute a return value. The return value is "returned" back to the "caller"
             For Example:
             var x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
The result in x will be:

12

You should use functions because you can reuse code: Define the code once, and use it many times.
You should use functions because you  can use the same code many times with different arguments, to produce different results.
Accessing a function without () operator will return the function object instead of the function result.
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

## Local Variables

Variables declared within a JavaScript function, become LOCAL to the function.
Local variables can only be accessed from within the function.
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
Local variables are created when a function starts, and deleted when the function is completed.

# Conclusion 

This concludes that functions are essential on JavaScript because without them you
won't be able to do what I've mentioned above.