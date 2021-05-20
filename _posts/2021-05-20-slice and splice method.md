---
Layout:
Title:	"slice vs splice method"
Date:	2021-05-20
Categories:

---

# Introduction

today I dealt with splice and slice method

# Body

- The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.

- The splice() method changes the original array and slice() method doesn’t change the original array.
- The splice() method can take n number of arguments:
   1. Argument 1: Index, Required. An integer that specifies at what position to add /remove items, Use negative values to specify the position from the end of the array.
   2. Argument 2: Optional. The number of items to be removed. If set to 0(zero), no items will be removed. And if not passed, all item(s) from provided index will be removed.
   3. Argument 3…n: Optional. The new item(s) to be added to the array.
   
   - The slice() method can take 2 arguments:
     1. Argument 1: Required. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array.
     2. Argument 2: Optional. An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array.

     # Conclusion 

     splice and slice are not used for the same purpose.
     slice returns while splice removes.
