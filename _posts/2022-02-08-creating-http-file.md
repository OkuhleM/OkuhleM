---
Layout:
Title:	"creating a http server"
Date:	2022-01-13
Categories:

---

# Introduction

today I did creating a http sever on freecodecamp.

# Body

firstly I will start by explaining what a server is so that it much easier 
understanding this blogpost.

- a Server is a computer or computer program which manages access to a contralized resource or serveice
in a network.
- a server helps by maintaining access.
Every website we visit is ran on HTTP server.
 
 First we need to learn about what is OSI.

The Open Systems Interconnection model (OSI model) is a conceptual model that characterizes and standardizes the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology. 

The server is set to listen on the specified port.
When the server is ready, the listen callback function is called.
The callback function we pass is the one that's going to be executed upon every request that comes in. Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object).

# Conclusion

express along with creating http server works with nodejs.
The first benefit of using Express.JS for backend development is that you would be able to scale your application quickly. As you know that there is a support of Node.JS, so with the help of addition in nodes and adding extra resources to it, you can quickly scale your application in any manner.
