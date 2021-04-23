---
Layout:
Title:	"Daily Report about Array.prototype.includes()"
Date:	2021-04-23
Categories:

---

# Introduction

I dealt with a an include method while solving a katar.

# body

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

        Syntax
includes(valueToFind)
includes(valueToFind, fromIndex)


valueToFind
The value to search for.

> fromIndex Optional
The position in this array at which to begin searching for valueToFind.
The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).
Defaults to 0.

> Return value
A Boolean which is true if the value valueToFind is found within the array (or the part of the array indicated by the index fromIndex, if specified).

Values of zero are all considered to be equal, regardless of sign. (That is, -0 is considered to be equal to both 0 and +0), but false is not considered to be the same as 0.

# Conclusion

includes() method is intentionally generic. It does not require this value to be an Array object, so it can be applied to other kinds of objects (e.g. array-like objects).