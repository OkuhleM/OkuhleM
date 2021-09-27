---
Layout:
Title:	"react router"
Date:	2021-09-22
Categories:

---

# Introduction
the App that I'm creating I'm supposed to use the router.

# Body 
React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

Installing React Router: React Router can be installed via npm in your React application
Step 1: cd into your project directory i.e geeks.
Step 2: To install the React Router use the following command:

After installing react-router-dom, add its components to your React application.

* BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
* Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
* Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.
* Switch: Switch component is used to render only the first route that matches the location rather than rendering all matching routes. Although there is no defying functionality of SWITCH tag in our application because none of the LINK paths are ever going to coincide. But let’s say we have a route (Note that there is no EXACT in here), then all the Route tags are going to be processed which start with ‘/’ (all Routes start with /). This is where we need SWITCH statement to process only one of the statements.

To add React Router components in your application, open your project directory in the editor you use and go to app.js file.

1. exact: It is used to match the exact value with the URL.
2. path: Path specifies a pathname we assign to our component.
3. component: It refers to the component which will render on matching the path.

# Conclusion

 By default, routes are inclusive which means more than one Route component can match the URL path and render at the same time. If we want to render a single component, we need to use switch.