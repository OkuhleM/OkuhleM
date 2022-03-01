---
Layout:
Title: "password hashing"
Date: 2022-02-24
Categories:

---

# Introduction

## What is password hashing?

Hashing is the act of converting passwords into unreadable strings of characters that are designed 
to be impossible to convert back, known as hashes. Some hashing schemes are more easily cracked than others.

# Body

When a password has been “hashed” it means it has been turned into a scrambled representation of itself. A 
user’s password is taken and – using a key known to the site – the hash value is derived from the combination 
of both the password and the key, using a set algorithm.
To verify a user’s password is correct it is hashed and the value compared with that stored on record each time 
they login.

You cannot directly turn a hashed value into the password, but you can work out what the password is if you 
continually generate hashes from passwords until you find one that matches, a so-called brute-force attack, 
or similar methods.

Encryption, like hashing, is a function of cryptography, but the main difference is that encryption is something 
you can undo, while hashing is not. If you need to access the source text to change it or read it, encryption allows 
you to secure it but still read it after decrypting it. Hashing cannot be reversed, which means you can only know what 
the hash represents by matching it with another hash of what you think is the same information.

If a site such as a bank asks you to verify particular characters of your password, rather than enter the whole thing,
it is encrypting your password as it must decrypt it and verify individual characters rather than simply match the 
whole password to a stored hash.
Encrypted passwords are typically used for second-factor verification, rather than as the primary login factor.

As computational power has increased the number of brute-force guesses a hacker can make for an efficient hashing 
algorithm has increased exponentially.
Bcrypt, which is based on the Blowfish cipher and includes a salt, is designed to protect against brute-force attacks 
by intentionally being slower to operate. It has a so-called work factor that effectively puts your password through 
a definable number of rounds of extension before being hashed.
By increasing the work factor it takes longer to brute-force the password and match the hash. The theory is that the 
site owner sets a sufficiently high-enough work factor to reduce the number of guesses today’s computers can make at 
the password and extend the time from days or weeks to months or years, making it prohibitively time consuming and 
expensive.

# Conclusion

The biggest problem with password hashing is that if you run a specific word like 'green' through a hashing algorithm, 
the hashed outcome for that word will always be the same. So let's say cybercriminals get a hold of a database with 
hashed passwords. No one's stopping them from guessing millions of passwords and running them through the same 
algorithm to see what the hash for a specific word looks like.

Now, hackers don't just use brute force (by trying to guess all possible password combinations). They base it on what 
is known as 'dictionary attacks' — using common words and likely combinations like 'password123'. Now hackers can use 
'rainbow tables' — precomputed hash databases for the most common passwords.