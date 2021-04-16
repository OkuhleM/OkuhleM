---
Layout:
Title:	"Daily Report about Three ways you can find the largest number in an array using JavaScript"
Date:	2021-04-16
Categories:

---

# Introduction

today Njabulo gave us a problem to solve.
we had to sort an array and return 2 largest numbers, before I got it right
I went through some challenges.

# Body 
## Approach 1


function largestOfFour(arr) {
   var largestNumber = [0,0,0,0];
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
        }
    }
 }
 return largestNumber;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

## Approach 2

function largestOfFour(mainArray) {
  return mainArray.map(function (subArray){
    return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
      return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
    }, 0);
  });
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  when solving approach 2 you must use the following 2 methods.

- The map() method creates a new array with the results of calling a provided function on every element in this array. Using map will call a provided callback function once for each element in an array, in order, and constructs a new array from the results.

- The reduce() method applies a function against an accumulator and each value of the array to reduce it to a single value.
The ternary operator is the only JavaScript operator that takes three operands. This operator is used as a shortcut for the if statement.

## Approach 3

for this approach you must use two methods.
The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).
You can pass an array of arguments to a function by using the apply() method and the function will execute the items in the array.

The Math.max() function returns the largest of zero or more numbers, and we can pass any number of arguments.

# Conclusion

This problem that we were given taught new strategies. the more I stucked I did some research which helped
me understand the mentioned methods. This has improved my knowledge regarding JavaScript.