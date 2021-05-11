---
Layout:
Title:	"Daily Report about Getters and Setters"
Date:	2021-05-11
Categories:

---

# Introduction
I'm still doing ES6 so todday I did getters and setters.

# Body

## GETTER
 
- The get syntax binds an object property to a function that will be called when that property is looked up.
 
          Syntax
{get prop() { ... } }
{get [expression]() { ... } }

 >> Parameters
- prop
The name of the property to bind to the given function.
- expression
Starting with ECMAScript 2015, you can also use expressions for a computed property name to bind to the given function.

- It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value, although it is possible to use a getter and a setter in conjunction to create a type of pseudo-property.

* when working with the get syntax:

   - It can have an identifier which is either a number or a string;
   - It must have exactly zero parameters 
   - It must not appear in an object literal with another get or with a data entry for the same property ({ get x() { }, get x() { } } and { x: ..., get x() { } } are forbidden).

   ## SETTER

   - The set syntax binds an object property to a function to be called when there is an attempt to set that property.

      Syntax
{set prop(val) { . . . }}
{set [expression](val) { . . . }}

>> Parameters
- prop
The name of the property to bind to the given function.
- val
An alias for the variable that holds the value attempted to be assigned to prop.

- In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed.
- Setters are most often used in conjunction with getters to create a type of pseudo-property. 
- It is not possible to simultaneously have a setter on a property that holds an actual value.

when working with the set syntax:

* It can have an identifier which is either a number or a string;
* It must have exactly one parameter.
* It must not appear in an object literal with another set or with a data entry for the same property.
( { set x(v) { }, set x(v) { } } and { x: ..., set x(v) { } } are forbidden ).

# Conclusion

getters and setters are important because they hide internal implementation details.
It is convetion to precede the name of a private variable with an underscore (_), but this practise itself does 
not make a variable private. 