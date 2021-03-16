---
Layout:
Title:	"Daily Report"
Date:	2021-03-16
Categories:

---

# Introduction
Today I'll be elaborating more on the topic that I focused on.

# Body
The topic that I did today was the Object Oriented Programming.
I understand this Topic well, It's not tricky or confusing it's a straight 
foward topic although I'm not done with it yet.

## Object Oriented Programming
### What are objects?
Objects are tangible things people can observe and interact with.
- qualities or properties define what makes up an object.
- Similar objects share the same properties, but may have diiferent values for those Properties.
- Objects in JavaScript are used to model real-world objects, giving them properties and behavior just
like their real world counterparts.

- Objects can have a special type of property, called a method.
*Methods are properties that are functions.

E.g. Duck Example with method.
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is" + duck.name + ".";}
};
duck.sayName ();

- Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors
- Constructors use the keyword "this" to set properties of the object they will create.
  *Inside the constructed "this" refers to the new object it will create.

- Constructors define properties and behaviors instead of returning a value as other functions might.
* when "this" is used inside a constructor it always refers to the object being created.  
* anytime a constructor function creates a new objects, that object is said to be an instance of it's constructor.

# Conclusion
This is it for today.
This is what I learnt today.