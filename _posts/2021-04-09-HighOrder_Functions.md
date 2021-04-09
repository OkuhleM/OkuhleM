---
Layout:
Title:	"Daily Report about JavaScript Booleans"
Date:	2021-04-09
Categories:

---

# Introduction

today I did High Order Functions.

# Body

## What is Functional Programming

In most simple term, Functional Programming is a form of programming in which you can pass functions as parameters to other functions and also return them as values.

First-Class Functions

If you have been learning JavaScript, you may have heard that JavaScript treats functions as first-class citizens. That’s because in JavaScript or any other functional programming languages functions are objects.

      Syntax

        function greeting() {
  console.log('Hello World');
}
// Invoking the function
greeting();  // prints 'Hello World'

## Higher-Order Functions

Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.

Array.prototype.map
The map() method creates a new array by calling the callback function provided as an argument on every element in the input array. The map() method will take every returned value from the callback function and creates a new array using those values.
The callback function passed to the map() method accepts 3 arguments: element, index, and array.

Array.prototype.filter
The filter() method creates a new array with all elements that pass the test provided by the callback function. The callback function passed to the filter() method accepts 3 arguments: element, index, and array.

# Conclusion

In a nutshell, a Higher-order function is a function that may receive a function as an argument and can even return a function. Higher-order functions are just like regular functions with an added ability of receiving and returning other functions are arguments and output.