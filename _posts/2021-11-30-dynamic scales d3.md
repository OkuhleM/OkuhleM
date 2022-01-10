---
Layout:
Title:	"Dynamic Scales d3"
Date:	2021-11-30
Categories:

---

# Introduction

today I'll be talking about the dynamic scales that I did in freecodecamp.

# Body

Scale functions are JavaScript functions that:

- take an input (usually a number, date or category) and
- return a value (such as a coordinate, a colour, a length or a radius)
They’re typically used to transform or map data values into visual variables such as position, length and colour.

you can create a scale function using:

let myScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 600]);

D3 creates a function myScale which accepts input between 0 and 10 (the domain) and maps it to output between 0 and 600 (the range).

# Conclusion

D3 is a JavaScript library that is short for Data-Driven Documents, and provides a series of functions to use and manipulate SVGs (scalable vector graphics). The first thing we are going to want to do is define a height and width for our SVG (in pixels) — in addition to this, we will define a padding value, to ensure that our plot axes are not right up against the boundaries of our SVG frame.
