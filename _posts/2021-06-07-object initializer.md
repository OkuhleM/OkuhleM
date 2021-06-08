---
Layout:
Title:	"Object Initializer"
Date:	2021-06-07
Categories:

---

# Introduction

today I dealt with the recipe app.
I'll be talking about object initializer.

# Body
- Objects can be initialized using new Object(), Object.create(), or using the literal notation (initializer notation). 
- An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

    Syntax
let o = {}
let o = {a: 'foo', b: 42, c: {}}

let a = 'foo', b = 42, c = {}
let o = {a: a, b: b, c: c}

let o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {}
};

- Objects consist of properties, which are used to describe an object. The values of object properties can either contain primitive data types or other objects.

* The object literal notation is not the same as the JavaScript Object Notation (JSON). Although they look similar, there are differences between them:

   - JSON permits only property definition using "property": value syntax.  The property name must be double-quoted, and the definition cannot be a shorthand.
   - In JSON the values can only be strings, numbers, arrays, true, false, null, or another (JSON) object.
   - A function value can not be assigned to a value in JSON.
   - Objects like Date will be a string after JSON.parse().
   - JSON.parse() will reject computed property names and an error will be thrown.

- When using the same name for your properties, the second property will overwrite the first.
- A property of an object can also refer to a function or a getter or setter method.
- Property definitions that do not use "colon" notation are not prototype mutations. They are property definitions that behave identically to similar definitions using any other name.

# Conclusion

- The Rest or Spread Properties for ECMAScript proposal adds spread properties to object literals. It copies own enumerable properties from a provided object onto a new object.
-  the object initializer syntax also supports computed property names. That allows you to put an expression in brackets [], that will be computed and used as the property name. 
- This is reminiscent of the bracket notation of the property accessor syntax, which you may have used to read and set properties already.