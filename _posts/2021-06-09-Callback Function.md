---
Layout:
Title:	"callback function"
Date:	2021-06-09
Categories:

---

# Introduction

today I did functional programming on freecodecamp, so I'll be talking about callback functions.

# Body

In JavaScript, a callback is a function passed into another function as an argument to be executed later.

-  callbacks are often used to continue code execution after an asynchronous operation has completed, these are called asynchronous callbacks.

- In computer programming, a callback is a piece of executable code that is passed as an argument to other code, which is expected to call back (execute) the argument at some convenient time.

- The invocation may be immediate as in a synchronous callback or it might happen at later time, as in an asynchronous callback.

    example:

    function functionOne(x) { alert(x); }

function functionTwo(var1, callback) {
   callback(var1);
}

functionTwo(2, functionOne);

- Function One takes in an argument and issues an alert with the x as it's argument.

- Function Two takes in an argument and a function.

- Function Two then passes the argument it took in to the function it took in.

- Function One is the callback function in this case.

- JavaScript has anonymous functions available, you can also pass in anonymous Functions as a variable to a function.

   synchronous example:

   function functionTwo(var1, callback) {
   callback(var1);
}

functionTwo(1, function (x) { alert(x); })

- In this case, the callback function is defined when we are calling functionTwo.

-  we can call the callback function inside of functionTwo as many times as we like

# Conclusion

- The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.

