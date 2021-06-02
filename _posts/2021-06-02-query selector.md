---
Layout:
Title:	"Query Selector method"
Date:	2021-06-02
Categories:

---

# Introduction

I was busy with the app trying to make my submit button submit information.
it's not entirely working yet but some parts are working like toggling.

# Body

- The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

  Syntax
element = document.querySelector(selectors);

* selectors
A DOMString containing one or more selectors to match. This string must be a valid CSS selector string; if it isn't, a SyntaxError exception is thrown.

* Return value
An HTMLElement object representing the first element in the document that matches the specified set of CSS selectors, or null is returned if there are no matches.

- If you need a list of all elements matching the specified selectors, you should use querySelectorAll() instead.
- If the specified selector matches an ID that is incorrectly used more than once in the document, the first element with that ID is returned.
- Escaping special characters
To match against an ID or selectors that do not follow standard CSS syntax (by using a colon or space inappropriately, for example), you must escape the character with a backslash ("\"). As the backslash is also an escape character in JavaScript, if you are entering a literal string, you must escape it twice (once for the JavaScript string, and another time for querySelector()):

# Conclusion

The first descendant element of baseElement which matches the specified group of selectors. The entire hierarchy of elements is considered when matching, including those outside the set of elements including baseElement and its descendants; in other words, selectors is first applied to the whole document, not the baseElement, to generate an initial list of potential elements. The resulting elements are then examined to see if they are descendants of baseElement. The first match of those remaining elements is returned by the querySelector() method.