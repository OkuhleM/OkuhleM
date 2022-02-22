---
Layout:
Title:	"Atomic Folder Structuring"
Date:	2022-02-15
Categories:

---

# Introduction

The aim of this article is to explain what Atomic Folder Structuring is.
Often, when people start the development of an application, they can get in trouble trying to understand 
how to organize your files.

# Body

## What is Atomic Design's principle
The Atomic Design's principle is to split your UI parts into "small" components in order to have a better reusability. 
Like chemistry, you can organize your components in atoms, molecules and organisms.

## Atoms
Atoms are the smallest components of your application. They can be texts, buttons, form inputs, and so on.
The golden rule is: if you can't split a component into smaller components then it must be an atom.


## Molecules
Molecules are combinations of atoms bonded together. For example, if you have Text and Input atoms, you can combine them into an InputField 
molecule .

## Organisms
Organisms are combinations of molecules: if you mix two or more molecules you get an organism.

Now getting into the real reason why atomic folder structuring piqued my interest was 
because it has better organization, better designs and it has no boundaries.

If you start thinking of components as atoms, molecules and organisms, during the bootstrap of your application, 
you are enforced to project your software following this pattern putting your focus on the reusing of your components.

Being the Atomic Design a methodology, it is not strictly bound to particular technologies: you can apply it to different languages and frameworks: 
PHP, CSS, Laravel, Symfony, React, Angular, Vue and so on.

Media queries do become a bit harder as when components in isolation you have no way to determine the size of parent containers. 
Components have no knowledge of their width so resizes happen in response to changes to the actual page sizes.
This solution can be remedied by introducing layout components that would surround your components and resize them accordingly.
 These layout components would implement CSS layout properties like flex, grid, etc.

# Conclusion

Components can be developed separately from the application, tested and viewed on tools like a style guide before importing
them into your application. This also means there is no over-reliance on back-end application logic for starting front-end 
development.
Once a set of patterns has been established, we can have a faster build process, with more flexibility in case a change needs 
to be made to the designs. Designs can be more consistent since we are re-using a lot of existing components.
This pattern also helps us manage our CSS a lot better since our CSS is tied to specific components. So depending on the 
architecture of your application you should only render the CSS utilized by the components rendered.