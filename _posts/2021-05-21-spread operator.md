---
Layout:
Title:	"spread operator"
Date:	2021-05-21
Categories:

---

# Introduction

today I carried on with debugging and did spread operator'

#  Body

- Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments   (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

- Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 

- When we invoke the function, we pass it all the values in the array using the spread syntax and the array name

       function sum(x, y, z, n) {
  return x + y + z + n;
}


Syntax
For function calls:

myFunction(...iterableObj);

- Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

- When calling a constructor with new it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]]). However, an array can be easily used with new thanks to spread syntax:

- A more powerful array literal
Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), 

# Conclusion 

Unlike unshift(), this creates a new arr1, and does not modify the original arr1 array in-place.