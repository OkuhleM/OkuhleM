---
Layout:
Title:	"Code Katars"
Date:	2021-11-23
Categories:

---

# Introduction
Today I'll be talking about the katar I did and the problems
I encountered along the way.

# Body
in today's katar we were asked to return the last four digits and
the first four digits in an array.
in order to solve this katar I passed in my array as an argument, and used the argument
in a slice.
I used slice because it returns selected elements in an array , as a new array.
slice selects from a given start, up to a (not inclusive) given end.
slice does not change the original array.

so I started slicing at the first index and stopped at the fourth index which returned the
first four digits.
from there onwards I sliced the last four digits by passing in -4 as an argument in the slice method.
this rturned the last four digits but I needed all of them in the same array.
So I used the concat method to combine both of my digits

# Conclusion

Although I tried a lot of methods before trying the above solution I finally got it right
and the most important part is that I understood the solution I iused.