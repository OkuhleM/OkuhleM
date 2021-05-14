---
Layout:
Title:	"Template strings"
Date:	2021-05-14
Categories:

---

# Introduction
today I'll be talking about template literals.


# Body

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

Template literals are enclosed by the backtick (` `) character instead of double or single quotes.
Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a tagged template. In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.

To escape a backtick in a template literal, put a backslash (\) before the backtick.
> Multi-line strings
Any newline characters inserted in the source are part of the template literal.

       > Multi-line string syntax:

       console.log('string text line 1\n' +
'string text line 2');
// "string text line 1
// string text line 2"

      > Template literals syntax:

      console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

>Tagged templates
A more advanced form of template literals are tagged templates.

Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string.

# Conclusion

Template Literals are a new ES2015, ES6 feature that allows you to work with strings in a novel way compared to ES5 and below.
The syntax at a first glance is very simple, just use backticks instead of single or double quotes: