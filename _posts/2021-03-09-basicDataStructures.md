---
Layout:
Title:	"Daily Report"
Date:	2020-03-09
Categories:

---

# Introduction

today I've started a new topic called basic data structures.

## basic data structures

The fundamental feature of any data structure is, the ability to not only store data, but to be able to retrieve that data on command. 
simple arrays contain 3 items.
In an array, each array item has an index, this index doubles as the position of that item in the array, and how you reference it. 
However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the first element of an array
is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets
and append it to the end of an array, or more commonly, to a variable which references an array object.
This is known as bracket notation.

 Arrays are mutable meaning they can be defined with a length of any number of elements,
 and elements can be added or removed over time.
Array.push() and Array.unshift() both methods take one or more elements as parameters and add those elements 
to the array the method is being called on: the push() method adds elements to the end of an array, and unshift() adds elements to 
the beginning.

splice() remove any number of consecutive elements from anywhere in an array.
splice() can take up to 3 parameters, The first two parameters of splice() are integers which represent indexes, or positions, of the array that 
splice() is being called upon.splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements.

While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks,
ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly 
readable syntax.

# Conclusion

well I'm not done with this topic but so far I manage to pick up what I've written above. 