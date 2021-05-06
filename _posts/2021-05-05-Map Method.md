---
Layout:
Title:	"Daily Report about map method"
Date:	2021-04-05
Categories:

---

# Introduction
I'll be talking about the map method

# Body
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

                     Syntax
// Arrow function
map((currentValue) => { ... } )
map((currentValue, index) => { ... } )
map((currentValue, index, array) => { ... } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function callbackFn(currentValue) { ... })
map(function callbackFn(currentValue, index) { ... })
map(function callbackFn(currentValue, index, array){ ... })
map(function callbackFn(currentValue, index, array) { ... }, thisArg)

> Parameters
* callback
Function that is called for every element of arr. Each time callback executes, the returned value is added to newArray.

The callback function accepts the following arguments:

>> currentValue
The current element being processed in the array.
>>index(Optional)
The index of the current element being processed in the array.
>>array(Optional)
The array map was called upon.
>>thisArg(Optional)
Value to use as this when executing callback.

>Return value
A new array with each element being the result of the callback function.

- map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values (including undefined).

# Conclusion

## When not to use map()
Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead.

*~You shouldn't be using map if:

- you're not using the array it returns; and/or
- you're not returning a value from the callback.