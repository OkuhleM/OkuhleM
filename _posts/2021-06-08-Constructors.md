---
Layout:
Title:	"Object Initializer"
Date:	2021-06-08
Categories:

---

# Introduction

today I finished up object oriented.

# Body

The constructor method is a special method of a class for creating and initializing an object of that class.

  Syntax
constructor() { ... }
constructor(argument0) { ... }
constructor(argument0, argument1) { ... }
constructor(argument0, argument1, ... , argumentN) { ... }


- If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty

- If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provide

- The ValidationError class doesn't need an explicit constructor, because it doesn't need to do any custom initialization. 

- The default constructor then takes care of initializing the parent Error from the argument it is given.

- However, if you provide your own constructor, and your class derives from some parent class, then you must explicitly call the parent class constructor using super.

- There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.


# Conclusion

- A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.