---
Layout:
Title:	"unidirectional data flow"
Date:	2021-09-07
Categories:

---

# Introduction

today I carried on with react.

# Body

Unidirectional Data Flow is not a concept unique to React, but as a JavaScript developer this might be the first time you hear it.
In general this concept means that data has one, and only one, way to be transferred to other parts of the application.

> state is passed to the view and to child components
> actions are triggered by the view
> actions can update the state
> the state change is passed to the view and to child components

The view is a result of the application state. State can only change when actions happen. When actions happen, the state is updated.
Thanks to one-way bindings, data cannot flow in the opposite way.
     this has some key advantages:

    * it’s less error prone, as you have more control over your data
    * it’s easier to debug, as you know what is coming from where
    * it’s more efficient, as the library already knows what the boundaries are of each part of the system

A state is always owned by one Component. Any data that’s affected by this state can only affect Components below it: its children.
Changing state on a Component will never affect its parent, or its siblings, or any other Component in the application: just its children.
This is the reason that the state is often moved up in the Component tree, so that it can be shared between components that need to access it.

# Conclusion 

Unidirectional data flow is the idea that components should only receiveraise data in one direction. Child components should only call functions from parent components, while parent components should only set/pass data to their children.