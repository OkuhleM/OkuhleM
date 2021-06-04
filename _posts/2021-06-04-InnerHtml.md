---
Layout:
Title:	"innerHTML"
Date:	2021-06-04
Categories:

---

# Introduction

 I'm still busy with the Recipe box, and so far It only submits the first input.

# Body

- The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
 
   Syntax
const content = element.innerHTML;

element.innerHTML = htmlString;

- Value
A DOMString containing the HTML serialization of the element's descendants. Setting the value of innerHTML removes all of the element's descendants and replaces them with nodes constructed by parsing the HTML given in the string htmlString.

- Exceptions
* SyntaxError
An attempt was made to set the value of innerHTML using a string which is not properly-formed HTML.
* NoModificationAllowedError
An attempt was made to insert the HTML into a node whose parent is a Document.

- Replacing the contents of an element
Setting the value of innerHTML lets you easily replace the existing contents of an element with new content.

For example, you can erase the entire contents of a document by clearing the contents of the document's body attribute:

document.body.innerHTML = "";
This example fetches the document's current HTML markup and replaces the "<" characters with the HTML entity "&lt;", thereby essentially converting the HTML into raw text. This is then wrapped in a <pre> element. Then the value of innerHTML is changed to this new string. As a result, the document contents are replaced with a display of the page's entire source code.

# Conclusion

It is not uncommon to see innerHTML used to insert text into a web page. There is potential for this to become an attack vector on a site, creating a potential security risk.