---
Layout:
Title:	"for in statement"
Date:	2021-05-22
Categories:

---

# Introduction

Today I dealt with debugging, for in statement.

# Body

The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols, including inherited enumerable properties.


           Syntax
for (variable in object) {
  statement
}

- variable
A different property name is assigned to variable on each iteration.
- object
Object whose non-Symbol enumerable properties are iterated over.

* A for...in loop only iterates over enumerable, non-Symbol properties. Objects created from built–in constructors like Array and Object have inherited non–enumerable properties from Object.prototype and String.prototype, such as String's indexOf() method or Object's toString() method.

*  The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain.

* Deleted, added, or modified properties
A for...in loop iterates over the properties of an object in an arbitrary order.

* If a property is modified in one iteration and then visited at a later time, its value in the loop is its value at that later time. A property that is deleted before it has been visited will not be visited later. Properties added to the object over which iteration is occurring may either be visited or omitted from iteration.

* In general, it is best not to add, modify, or remove properties from the object during iteration, other than the property currently being visited. There is no guarantee whether an added property will be visited, whether a modified property (other than the current one) will be visited before or after it is modified, or whether a deleted property will be visited before it is deleted.

* Array indexes are just enumerable properties with integer names and are otherwise identical to general object properties. There is no guarantee that for...in will return the indexes in any particular order. The for...in loop statement will return all enumerable properties, including those with non–integer names and those that are inherited.

* Because the order of iteration is implementation-dependent, iterating over an array may not visit elements in a consistent order. Therefore, it is better to use a for loop with a numeric index (or Array.prototype.forEach() or the for...of loop) when iterating over arrays where the order of access is important.

- Iterating over own properties only
If you only want to consider properties attached to the object itself, and not its prototypes, use getOwnPropertyNames() or perform a hasOwnProperty() check (propertyIsEnumerable() can also be used). Alternatively, if you know there won't be any outside code interference, you can extend built-in prototypes with a check method.

# Conclusion

## Why Use for...in?
- Given that for...in is built for iterating object properties, not recommended for use with arrays, and options like Array.prototype.forEach() and for...of exist, what might be the use of for...in at all?

- It may be most practically used for debugging purposes, being an easy way to check the properties of an object (by outputting to the console or otherwise). 
- ~Although arrays are often more practical for storing data, in situations where a key-value pair is preferred for working with data (with properties acting as the "key"), there may be instances where you want to check if any of those keys hold a particular value.