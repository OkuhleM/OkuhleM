---
Layout:
Title:	"Daily Report about Using window alert"
Date:	2021-04-19
Categories:

---

# Introduction
today I was researching more about the project that Moral gave us I came across this topic 
which kinda interested me.

# Body

what is window alert?

alert() window. alert() instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

- Alternatively you can also use event listener to listen to windows onload event, adding your code to that event listener
will delay running your code until after the whole content on your page has been loaded.
- The alert method displays a virtual alert box on the screen.
- The Alert method parameter is then displayed to the user in plain text:
 window,alert(message);
 - window is the global object, you can call else use the following shorthand.
 alert(message);

 -The Alert method is technically a property of window Object, but since all window properties are automatically global variables, we can use alert as a global variable instead of as a property of window meaning you can directly use alert() method instead of window.alert() method 

 > Alert acts as modal prompt meaning that the code calling alert will pause until the prompt is answered.
 - this means that no JavaScript code will be executed until the alert is dismissed.

 # Conclusion

 today I learnt that the alert that always pops up when you're on the internet is not magically but
 it has been programmed to be there using JavaScript or other programming language.