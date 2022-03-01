---
Layout:
Title: "HTTP Status message"
Date:	2022-02-18
Categories:

---

# Introduction

today I'll be explaining what is a status message,why or when are
they used.


HTTP status codes are like short notes from a server that get tacked onto a web page. They’re not actually 
part of the site’s content. Instead, they’re messages from the server letting you know how things went when 
it received the request to view a certain page.

These kinds of messages are returned every time your browser interacts with a server, even if you don’t see them. 
If you’re a website owner or developer, understanding HTTP status codes is critical. When they do show up, HTTP status 
codes are an invaluable tool for diagnosing and fixing website configuration errors.

# Body

HTTP status codes are divided into 5 “classes”. These are groupings of responses that have similar or related meanings. 
Knowing what they are can help you quickly determine the general substance of a status code before you go about looking up 
its specific meaning.


- 100s: Informational codes indicating that the request initiated by the browser is continuing.
- 200s: Success codes returned when browser request was received, understood, and processed by the server.
- 300s: Redirection codes returned when a new resource has been substituted for the requested resource.
- 400s: Client error codes indicating that there was a problem with the request.
- 500s: Server error codes indicating that the request was accepted, but that an error on the server prevented 
  the fulfillment of the request.

For the most part, it’s the higher-level codes that matter for SEO. 400- and 500-level responses can prevent bots from crawling 
and indexing your pages. Too many of these errors can also indicate that your site isn’t of high quality, possibly lowering your 
rankings.

300-level codes have a bit more complicated relationship with SEO. The main thing you need to know to understand their impact is 
the difference between permanent and temporary redirects, which we’ll cover in more detail in the relevant section below.

In a nutshell, however, permanent redirects share link equity from backlinks, but temporary ones do not. In other words, when 
you use temporary redirects for pages that have moved, you lose the SEO advantage of all the link building you’ve done.

## 100 Status Codes
A 100-level status code tells you that the request you’ve made to the server is still in progress for some reason. 
This isn’t necessarily a problem, it’s just extra information to let you know what’s going on.

* 100: “Continue.” This means that the server in question has received your browser’s request headers, and is now 
        ready for the request body to be sent as well. This makes the request process more efficient since it prevents the 
        browser from sending a body request even though the headers have been rejected.
* 101: “Switching protocols.” Your browser has asked the server to change protocols, and the server has complied.
* 103: “Early hints.” This returns some response headers before the rest of the server’s response is ready.

## 200 Status Codes
This is the best kind of HTTP status code to receive. A 200-level response means that everything is working exactly as it should.

200: “Everything is OK.” This is the code that is delivered when a web page or resource acts exactly the way it’s expected to.
201: “Created.” The server has fulfilled the browser’s request, and as a result, has created a new resource.
202: “Accepted.” The server has accepted your browser’s request but is still processing it. The request ultimately may or may not 
      result in a completed response.
203: “Non-Authoritative Information.” This status code may appear when a proxy is in use. It means that the proxy server received a 
      200 “Everything is OK” status code from the origin server, but has modified the response before passing it on to your browser.
204: “No Content.” This code means that the server has successfully processed the request, but is not going to return any content.
205: “Reset Content.” Like a 204 code, this means that how server has processed the request but is not going to return any content. 
      However, it also requires that your browser resets the document view.
206: “Partial Content.” You may see this status code if your HTTP client (also known as your browser) uses ‘range headers’. This 
      enables your browser to resume paused downloads, as well as to split a download into multiple streams. A 206 code is sent 
      when a range header causes the server to send only part of the requested resource.

## 300 Status Codes
Redirection is the process used to communicate that a resource has been moved to a new location. There are several HTTP status codes that accompany redirections, in order to provide visitors with information about where to find the content they’re looking for.

300: “Multiple Choices.” Sometimes, there may be multiple possible resources the server can respond with to fulfill your browser’s request. A 300 status code means that your browser now needs to choose between them. This may occur when there are multiple file type extensions available, or if the server is experiencing word sense disambiguation.
301: “The requested resource has been moved permanently.” This code is delivered when a web page or resource has been permanently replaced with a different resource. It is used for permanent URL redirection.
302: “The requested resource has moved, but was found.” This code is used to indicate that the requested resource was found, just not at the location where it was expected. It is used for temporary URL redirection.
303: “See Other.” Understanding a 303 status code requires that you know the difference between the four primary HTTP request methods. Essentially, a 303 code tells your browser that it found the resource your browser requested via POST, PUT, or DELETE. However, to retrieve it using GET, you need to make the appropriate request to a different URL than the one you previously used.
304: “The requested resource has not been modified since the last time you accessed it.” This code tells the browser that the resources stored in the browser cache haven’t changed. It’s used to speed up web page delivery by reusing previously-downloaded resources.
307: “Temporary Redirect.” This status code has replaced 302 “Found” as the appropriate action when a resource has been temporarily moved to a different URL. Unlike the 302 status code, it does not allow the HTTP method to change.
308: “Permanent Redirect.” The 308 status code is the successor to the 301 “Moved Permanently” code. It does not allow the HTTP method to change and indicates that the requested resource is now permanently located at a new URL.

http statuses are up to infinity so we can never explain all of them.

# Conclusion

While they may seem confusing or intimidating on the surface, HTTP status codes are actually very informative. 
By learning some of the common ones, you can troubleshoot problems on your site more quickly.