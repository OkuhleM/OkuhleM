---
Layout:
Title:	"Daily Report about pure functions"
Date:	2021-04-07
Categories:

---

# Introduction
Today I'll be talking about Pure Functions.

# Body

What are Pure functions?

They are the atomic building blocks in functional programming.

- Pure functions have the same Input and same Output this make them predictable.
- They have no side effects since there's is no mutating Input.
- They have consistant results.

> A function must pass two tests to be considered pure.

   Impure Functions
* they have consistant results.
* they rely on shared state do their job by incrementing a variable outside it's scope.
* shared state introduces a time dependency. you get different results depending on 
when you called the function.

   ### 3 ways to avoid side effects
1. Leave your Input Alone
  - changing your functions input can lead to unexpected behaviors in a large system.

2. Don't Write To Disk
  - mixing data manipulation logiv with network filesystem calls hurts testability and parallel processing.

3. Be Transparent
  - your function can be substituted with it's output and not affect your programs behavior.

# Conclusion

pure functions gives out the output of the same Input.
when you alter or change pure functions you'll get side effects.