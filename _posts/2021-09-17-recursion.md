---
Layout:
Title:	"recursion"
Date:	2021-09-17
Categories:

---

# Introduction
today as I was solving a katar it required me to use recursion so I went back to recursion.

# Body

recursion is when a function that calls itself until someone or a condition stops it.
once the condition is met the function stops calling itself, this is called a base condition.
of ...else statements must be used so that the function can stop recurssing.

Recursion also presents the same danger. It’s not hard to write a self-referencing function that’ll crash your browser.

## THIS RUNS FOREVER, BE WARNED

function run() { console.log(‘running’); run(); }

run(); // running // running // …

Without a stopping condition, the run will forever call itself. You can fix that with an if statement.

# Conclusion
going back to recursion helped me understand the katar that I was dealing with more