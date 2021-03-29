---
Layout:
Title:	"Daily Report about JavaScript Strings"
Date:	2021-03-26
Categories:

---

# Introduction
I will share the little knowledge I have regarding the strings.

# Body

## What is a string?

a string is an object used to represent and manipulate a sequence of characters.
Strings are useful for holding data that can be represented in text form.
some of the most used operations on strings are to check their length.
to build and concatenate them using the + and += string operators.

strings can be created as primitives from string literals or as objects, using the 
string() constructor.
string.
string primitives and string objects can be used interchangeably in most situations.
we also have string literals, which can be specified using single or double quotes.

you can access an individual character in a string using charAt() method.
secondly you can treat the string as an array-like object, Where individual characters correspond
to a numerical index.
for comparing you use less than & greater than operations.

primitives passed to eval are treated as source code.
strings objects are treated as all other objects.
valueOf() method is used for converting a string object to its primitive counterpart.
you can use long literals by using the + operator.
you can also use a backslash character at the end of each line.

Strings creates a new String object, it performs a type conversion when called as a 
function, rather than as a constructor, which is usually more useful.

# Conclusion

It's possible to use strings as a more reliable toString() alternatives, as it works when
used on null, undefined and on symbols. 