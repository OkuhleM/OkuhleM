---
Layout:
Title:	"Headless Browsers"
Date:	2022-02-16
Categories:

---

# Introduction
this blogpost will full explain what a headless browser is and will also include
advantages and examples of headless browsers.

# Body
## what is a headless browser?
- headless browser is web browser without ui, their gui is hidden from the user.

A headless browser is just like any other browser, the only difference is we cannot see anything on the screen. 
Here we can say that the program actually runs in the backend and nothing can be viewed on the screen.
Just like a normal browser a Headless Browser performs all the functions like clicking links, navigating pages, 
downloading the document, uploading a document, etc.

A normal browser would proceed with each step of the program with a GUI presentation, whereas for a Headless Browser 
all the steps of the program are carried out sequentially and correctly and we can keep a track of it with the help of
a Console or command-line interface.


-  Headless Browsers are used when the machine has no GUI, that is while using Linux (an OS without GUI) is executed via the 
   command-line interface and actually has no interface to display.
- Also, these can be used in a case where there is no need to view anything and our purpose is just to ensure that all tests are getting 
  executed successfully line by line.
- When there is a need for executing parallel tests, UI based browsers consume a lot of memory and/or resources. Hence, here Headless browser 
  is preferred to use.
- If we want to perform Regression Testing for the next coming releases with continuous Integration and we are done with the Cross 
  Browser Testing, then Headless browser testing can be used.

- If we wish to simulate multiple browsers on a single machine or running test cases just for data creation, then we use Headless 
  Browsers.

- When compared to Real Browsers, Headless Browsers are faster. So, these are chosen for faster execution.

## Examples of Headless browsers
* Html Unit Browsers
* Firefox
* Chrome
* PhantomJS
* Zombie.js
* TrifleJS
* SlimerJS
* Splash
* SimpleBrowser
* NodeJS

# conclusion

Headless Browser testing is in fact faster, by providing great speed and efficiency but it fails to reach out for some specific features that are indeed 
fulfilled by a Non-Headless / Real Browsers.
Headless Browser has its own benefits while Real Browser has its own. As per the need for testing, one can choose whichever 
technique is preferable and beneficial to the tester.


