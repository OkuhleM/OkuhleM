---
Layout:
Title:	"Daily Report about rest parameters"
Date:	2021-04-10
Categories:

---

# Introduction

I did Parameters on ES6.

# Body

with rest parameters you can create functions that take a variable number of arguments.
A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within a "standard" JavaScript array.. Only the last parameter in a function definition can be a rest parameter.

    Syntax
function f(a, b, ...theArgs) {
  // ...
}


>>>> Quick reference
A function definition can have only one ...restParam.

foo(...one, ...wrong, ...wrong)
The rest parameter must be the last parameter in the function definition.

foo(...wrong, arg2, arg3)
foo(arg1, arg2, ...correct)

 - The difference between rest parameters and the arguments object
* There are three main differences between rest parameters and the arguments object:

- The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
- The arguments object has additional functionality specific to itself (like the callee property).
- The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. Whereas the arguments object contains all of the parameters -- including all of the stuff in the ...restParam -- unbundled.

a rest parameter is used to collect all parameters after the first parameter into an array. Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:Rest parameters are real arrays; the arguments object is not.
Array methods can be used on rest parameters, but not on the arguments object

# Conclusion


* Rest parameters were introduced to reduce the boilerplate code that was commonly used for converting a set of arguments to an array.