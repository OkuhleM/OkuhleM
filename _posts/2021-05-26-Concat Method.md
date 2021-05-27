---
Layout:
Title:	"Concat Method"
Date:	2021-05-26
Categories:

---

# Introduction

today I dealt with concat after doing a katar.

# Body

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

Syntax
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)

- Parameters
* valueN (Optional)
Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called. See the description below for more details.
- Return value
returns a new Array instance.

- The concat method creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array). 

- The concat method does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that contains copies of the same elements combined from the original arrays. 

- Object references (and not the actual object): concat copies object references into the new array. Both the original and new array refer to the same object.

- Data types such as strings, numbers and booleans (excluding String, Number, and Boolean objects): concat copies the values of strings and numbers into the new array.

# Conclusion

-  Concatenating array(s)/value(s) will leave the originals untouched.
- Furthermore, any operation on the new array (except operations on elements which are object references) will have no effect on the original arrays, and vice versa.

