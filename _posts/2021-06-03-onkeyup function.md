---
Layout:
Title:	"Onkeyup function"
Date:	2021-06-03
Categories:

---

# Introduction

today I used an onkeyup function on my app.

# Body

- The onkeyup property of the GlobalEventHandlers mixin is an event handler that processes keyup events.
- The keyup event fires when the user releases a key that was previously pressed.

         Syntax
target.onkeyup = functionRef;

* Value
functionRef is a function name or a function expression. 
The function receives a KeyboardEvent object as its sole argument.

* The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered.

# Conclusion

If you're looking for a way to react to changes in an input's value, you should use the input event.
Some changes are not detectable by keyup, for example pasting text from the context menu in a text input.