---
Layout:
Title:	"Split Method"
Date:	2021-05-25
Categories:

---

# Introduction

Today I dealt with the Split method a lot on the topic I was dealing with on freecodecamp.
I dealt with Basic Algorithm Scripting which required me solve a lot of problems.

# Body

- The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. 
- The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

           * Syntax
split()
split(separator)
split(separator, limit)

- Parameters
* separator (Optional)
The pattern describing where each split should occur, The separator can be a simple string or it can be a regular expression.

- The simplest case is when separator is just a single character; this is used to split a delimited string. 
- If separator contains multiple characters, that entire character sequence must be found in order to split.
- If separator is omitted or does not occur in str, the returned array contains one element consisting of the entire string.
- If separator appears at the beginning or end of the string, it still has the effect of splitting.  The result is an empty (i.e. zero length) string, which appears at the first or last position of the returned array.
- If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".

- limit (Optional)
* A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array.

- The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
- If limit is 0, [] is returned.

* Return value
- An Array of strings, split at each point where the separator occurs in the given string.
 
### Its  uses

  - Removing spaces from a string.
  - Splitting with a RegExp to include parts of the separator in the result.
  - Reversing a String using split()

 # Conclusion

 - When found, separator is removed from the string, and the substrings are returned in an array.
 - If separator is a regular expression with capturing parentheses, then each time separator matches, the results including any undefined results of the capturing parentheses are spliced into the output array.
 - If the separator is an array, then that Array is coerced to a String and used as a separator.