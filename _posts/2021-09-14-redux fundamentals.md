---
Layout:
Title:	"redux fundamentals"
Date:	2021-09-14
Categories:

---

# Introduction
today I carrief on with redux.

# Body

we looked at how Redux can help us build maintainable apps by giving us a single central place to put global app state. We also talked about core Redux concepts like dispatching action objects and using reducer functions that return new state values.

the function that you've passed into createStore as the first argument. That one single reducer function ultimately needs to do several things:

    * The first time the reducer is called, the state value will be undefined. The reducer needs to handle this case by supplying a default state value 
      
      before handling the incoming action.
    * It needs to look at the previous state and the dispatched action, and determine what kind of work needs to be done
    * Assuming actual changes need to occur, it needs to create new objects and arrays with the updated data and return those
    * If no changes are needed, it should return the existing state as-is.

Redux encourages you to think about your application in terms of the data you need to manage. The data at any given point in time is the "state" of your application, and the structure and organization of that state is typically referred to as its "shape". The shape of your state plays a major role in how you structure your reducer logic.

A Redux state usually has a plain Javascript object as the top of the state tree. (It is certainly possible to have another type of data instead, such as a single number, an array, or a specialized data structure, but most libraries assume that the top-level value is a plain object.) The most common way to organize data within that top-level object is to further divide data into sub-trees, where each top-level key represents some "domain" or "slice" of related data.


# Conclusion 

you should define your state shape in terms of your domain data and app state, not your UI component tree.
A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change. We have tools, like Redux, that help manage an application’s state changes in a single store so that they behave consistently.