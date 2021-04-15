---
Layout:
Title:	"Daily Report about filter method"
Date:	2021-04-14
Categories:

---

# Introduction
today I dealt with reduce method on code wars.

# Body

- what does it do?

reduce() is a method that you can use with any array. It iterates over every element and returns one single result based on its operations. These operations depend on a parameter called reducer, which is a callback function that we provide for the reduce() method.

Our callback function takes between two and four parametres.

- It is a variable where reduce() stores the result of each iteration over the array.
- currentValue that's the name we'll use to call each element within the array.
- index the index of currentValue (optional.)
- array the whole array over which we are iterating (optional.)
The enlightening moment, for me, was realising that a is the place where reduce() stores the information of the previous iterations. So when we add stuff to it, we're keeping it safe until the end of the execution.

# Conclusion

reduce() is a powerful method that can be used to transform data in an array in many ways. It can be a bit confusing at the beginning. But for me, the trick was to understand that the result of each run of the callback function will be stored in the first argument it takes, this little a or accumulator.