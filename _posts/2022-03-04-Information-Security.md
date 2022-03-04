---
Layout:
Title: "DataBase"
Date: 2022-03-04
Categories:

---

# Introduction

today I'll be explaining what it is that I did on 
Freecodecamp.

# Body

Cross-site scripting (XSS) is a frequent type of attack where malicious scripts are injected into vulnerable 
pages, with the purpose of stealing sensitive data like session cookies, or passwords.

The basic rule to lower the risk of an XSS attack is simple: “Never trust user’s input”. As a developer you 
should always sanitize all the input coming from the outside. This includes data coming from forms, GET query 
urls, and even from POST bodies. Sanitizing means that you should find and encode the characters that may be 
dangerous e.g. <, >.

Modern browsers can help mitigating the risk by adopting better software strategies. Often these are configurable 
via http headers.

The X-XSS-Protection HTTP header is a basic protection. The browser detects a potential injected script using a 
heuristic filter. If the header is enabled, the browser changes the script code, neutralizing it. It still has 
limited support.

Browsers can use content or MIME sniffing to override response Content-Type headers to guess and process the data 
using an implicit content type.

Browsers can use content or MIME sniffing to override response Content-Type headers to guess and process the data 
using an implicit content type. While this can be convenient in some scenarios, it can also lead to some dangerous 
attacks. This middleware sets the X-Content-Type-Options header to nosniff, instructing the browser to not bypass 
the provided Content-Type.

# Conclusion


Information security is a set of practices designed to keep personal data secure from unauthorized access and 
alteration during storing or transmitting from one place to another.