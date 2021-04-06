---
Layout:
Title:	"Recursion"
Date:	2021-04-06
Categories:

---

# Introduction
I did recurion so I'll be telling you about it.

# Body

Recursion is a process of calling itself, so basically a function that is calls itself is 
called a recursive function.

   SYNTAX FOR RECURSIVE
function recursive() {
     //function code
     recursive();
     //function code
}

recursive();

a recursive function must have a condition to stop calling itself.
if it doesn't call itself it's an indifinely.
a base condition is when the function stops calling itself provided the condition is when the 
function calling itself provided the condition is met.
you can use if... else statements when one branch makes the recursive call,
and other doen't.

        SYNTAX 
    
    function recurse() {
      if(condition) {
        recurse();
      }
      else {
         // stop calling recurse 
      }
    }

    recurse();

# Conclusion

The perpose of recursion is to call itself.