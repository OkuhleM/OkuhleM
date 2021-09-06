---
Layout:
Title:	"day summary"
Date:	2021-09-03
Categories:

---

# Introduction
 today I did a toString katar

# Body

The toString() method in Javascript is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.


The toString() method is used with a number num as shown in above syntax using the ‘.’ operator. This method will convert num to a string.
Parameters Used: This method accepts a single optional parameter base. This parameter specifies the base in which the integer is represented in the string. It is an integer between 2 and 36 which is used to specify the base for representing numeric values.

Every object has a toString() method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected. By default, the toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]", where type is the object type.

# Conclusion

You can create a function to be called in place of the default toString() method. The toString() method takes no arguments and should return a string. The toString() method you create can be any value you want, but it will be most useful if it carries information about the object.