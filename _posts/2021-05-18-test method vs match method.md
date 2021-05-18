---
Layout:
Title:	"test method vs match Method"
Date:	2021-05-18
Categories:

---

# Introduction

today I'll be talking about test method vs match mathod 

# Body

- The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
- The match() method retrieves the result of matching a string against a regular expression.

   syntax:

    /regex/.test("string")
    "string".match(/regex/)
* test
- string:
The string against which to match the regular expression.

- Returns
true if there is a match between the regular expression and the string str. Otherwise, false.

- Use test() whenever you want to know whether a pattern is found in a string. test() returns a boolean.

* match

- If regexp is a non-RegExp object, it is implicitly converted to a RegExp by using new RegExp(regexp)
- If you don't give any parameter and use the match() method directly, you will get an Array with an empty string: [""].
- An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.
- If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
- if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
- An object of named capturing groups whose keys are the names and values are the capturing groups or undefined if no named capturing groups were defined.
- index
The index of the search at which the result was found.
- input
A copy of the search string.

# Conclusion 

Test is a method of RegExp, the argument is a string, and the return value is a boolean type. match is a String method, the argument is a regular expression, and the return value is an array.