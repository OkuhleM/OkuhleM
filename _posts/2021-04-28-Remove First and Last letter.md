---
Layout:
Title:	"Daily Report about remove first and last letter"
Date:	2021-04-28
Categories:

---

# Introduction

As I was solving a code katar I came across
a katar that required me to remove first and last letter

# Body

>> Using slice method
To remove the first and last character from a string, we need to specify the two arguments in slice method which are startIndex and endIndex.

>> Using substring method
The substring() method also works similar like slice method but in substring negative indexes are treated as 0 so that we need to use str.length-1 to get the endIndex.

>> Using both slice and substring methods
Now we are chaining the both slice() and substring() methods to remove the first and last character from a string.

>> Using replace method
The replace method takes two arguments, the first argument is a regular expression and the second argument is replacement.

# Conclusion

I used the split method.
The split() method is used to split a string into an array of substrings, and returns the new array.