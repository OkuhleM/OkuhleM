---
Layout:
Title: "authentication"
Date:	2022-02-21
Categories:

---

# Introduction

today's topic is about authentication, I will be alaborating on what 
authentication is, why it is essential and how it works.

# Body
## What is authentication?

Authentication is defined as a  process of recognizing a user's identity.
It is the mechanism of associating an incoming request with a set of identifying
credentials.

Authentication technology provides access control for systems by checking to see if a user's 
credentials match the credentials in a database of authorized users or in a data authentication 
server. In doing this, authentication assures secure systems, secure processes and enterprise 
information security.

## There are several authentication types.
- single-factor authentication
* For purposes of user identity, users are typically identified with a user ID, and authentication 
  occurs when the user provides credentials such as a password that matches their user ID. 

- two-factor authentication 
*  a unique code that is provided to a user over a mobile device when a sign-on is attempted or a 
   biometric signature, like a facial scan or thumbprint.

- multifactor authentication
* Authentication factors can even go further than SFA, which requires a user ID and password, or 2FA, 
  which requires a user ID, password and biometric signature. When three or more identity verification 
  factors are used for authentication -- for example, a user ID and password, biometric signature and 
  perhaps a personal question the user must answer 

## Why is authentication important in cybersecurity?

Authentication enables organizations to keep their networks secure by permitting only authenticated users 
or processes to gain access to their protected resources. This may include computer systems, networks, databases, 
websites and other network-based applications or services.

Once authenticated, a user or process is usually subjected to an authorization process to determine whether the authenticated 
entity should be permitted access to a specific protected resource or system. A user can be authenticated but not be given 
access to a specific resource if that user was not granted permission to access it.

The terms authentication and authorization are often used interchangeably. While they are often implemented together, they 
are two distinct functions. Authentication is the process of validating the identity of a registered user or process before 
enabling access to protected networks and systems. Authorization is a more granular process that validates that the 
authenticated user or process has been granted permission to gain access to the specific resource that has been requested. 
The process by which access to those resources is restricted to a certain number of users is called access control. 
The authentication process always comes before the authorization process.

# Conclusion

## How does authentication work?
During authentication, credentials provided by the user are compared to those on file in a database of authorized users' 
information either on the local operating system server or through an authentication server. If the credentials entered 
match those on file and the authenticated entity is authorized to use the resource, the user is granted access. User 
permissions determine which resources the user gains access to and also any other access rights that are linked to the user, 
such as during which hours the user can access the resource and how much of the resource the user is allowed to consume.