---
Layout:
Title:	"Daily Report about filter method"
Date:	2021-04-14
Categories:

---

# Introduction

today as I was busy with JavaScript tutorials I came across filter method 
which i'll be elaborating on it more.

# Body

what is a filter method?
a filter method returns an array containing elements of the parent array that match the set test.

A function containing a test is passed as an argument to the filter method. To keep an element the 
test function should return true and false to discard an element.

    EXAMPLE:
      [10, 2, 5, 100, 8].filter((number)=> number < 20) // filter array for numbers less than 20

What does the filter method do?

> Will take a test function
> Returns a new array containing the elements that matches the set test
> Returns an empty array if there are no matches

Filter method syntax

const filteredArray = oldArray.filter(callbackFunction(element[,index[,array]])[, thisArg])

> callbackFunction - The function that executes each of the elements of the array. The callback function is required and can take three parameters - required.

> element - This is the element currently being executed - required.

> index - This is the index of the current item - optional.

> array - This is the array that is currently being processed - optional.

> thisArg - This is an argument passed to be used as the this value in the callback - optional

when a array is returned the values of the old array will not change.

## Filter numbers within a set range in an array

Processing an array of numbers and returning the numbers that are within a set range. e.g: Checking if a person is old enough to watch the Deadpool movie.

## Filtering a list of objects using their similar properties

The .filter() method can be used to filter an array of objects which share a similar property. E.g Getting the students that passed a set.

## Getting elements within an array that exist over an index.

Another use of the .filter() method is filter out array entries beyond a particular array index.

# Conclusion

I have learnt that the filter method returns arrays containing elements of the parent element that match the 
set test.
