---
Layout:
Title:	"Daily Report about removing duplicates from any array"
Date:	2021-03-30
Categories:

---

# Introduction
As I was busy with code wars I faced a problem I couldn't solve which involved removing duplicates 
from any arrays so I googled and found the 7 methods I could use.
I will be talking about differant ways of removing duplicates from any array

# Body

1. Use Filter Method.
the filter method creates a new array of elements that pass the conditional we provide.
Any elements that fails or returns false, it will not be in the filtered array.
with the filter method you can also use it to retrieve the duplicate values from the 
array by simply adjusting our conditions.

Example:
   var arr = ["Audi", "BMW", "Ford", "Polo", "BMW", "Polo"];

   function removeDuplicates(data) {
     return datta.filter((value, index) => data.indexOf(value) === index);
   }  
   console.log(removeDuplicates(arr));

2. use a set
sets are new object types with ES6 that allows you to create collections of unique values.
 EXAMPLE: 
      var arr = ["Audi", "BMW", "Ford", "Polo", "BMW", "Polo"];

      function removeDuplicates(data) {
        return[...new Set(data)]
      }
      console.log(removeDuplicates(arr));

3. Using the for each Method
we can iterate over the elements in the array when using for Each.
and we will push into the new array if it doesn't exist in the array.

    EXAMPLE:
      
       var arr = ["Audi", "BMW", "Ford", "Polo", "BMW", "Polo"];

      function removeDuplicates(data) {
        let unique = [];
        data.forEach(element => {
        if (!unique.includes(element)) {
          unique.push(element))
        }

        });
        return unique;
      }
      console.log(removeDuplicates(arr));

4. Use the Reduce Method

This method is used to reduce the elements of the array and combine them into a final
array based on some reducer function that you pass.

EXAMPLE:

  var arr = ["Audi", "BMW", "Ford", "Polo", "BMW", "Polo"];

      function removeDuplicates(data) {
        let unique = data.reduce(function (a, b)) {
          return a;
        }, [];
      }
    console.log(removeDuplicates(arr));

> same method with a different approach.

   var arr = ["Audi", "BMW", "Ford", "Polo", "BMW", "Polo"];

      function removeDuplicates(data) {
        return data.reduce((acc, curr) => acc.includes(curr) ? acc; [...acc,curr], 
        []);
      }
      console.log(removeDuplicates(arr));

5. Adding a unique Method to the Array Prototype

In Javascript the array prototype constructor allows you to add new properties and methods to the Array object.

   EXAMPLE:
    var arr = ["Audi", "BMW", "Ford", "Polo", "BMW", "Polo"];
    Array.prototype.unique = function () {
      var unique = [];
      for (i = 0; i < this.length; i++) {
        var current = this[i];
        if (unique.indexOf(current) (0))
        unique.push(current);
      }
      return unique;
    }
    console.log(arr.unique());

6. By Using Underscore JS
_.uniq method produces a duplicate-free version of the array, and also we can sort this array by passing the second
parameter is true.

  EXAMPLE:

   var arr = ["Audi", "BMW", "Ford", "Polo", "BMW", "Polo"];
   console.log(_uniq(arr, false));

7. Removing Duplicate Objects from a Given Array
Some times it's a requirement to remove duplicate objects from an array of objects by the property name.

   EXAMPLE:

    var users = [
      {name: "Phindi", age:22, address:'Ad'},
      {name: "Thuli", age:34, address:'Ad'},
      {name: "Tom", age:23, address:'Ad'},
      {name: "Phindi", age:22, address:'Ad'},
      {name: "Thuli", age:27, address:'Ad'}
    ]
    function uniqByKeepLast(data, key) {
      return [
        ...new map(
          data.map(x => [key(x), x])
        ).values()
      ]
    }
    console.log(JSON.stringify(uniqByKeepLast(users, it => it.name)));

# Conclusion.

these methods all worked when I executed my program