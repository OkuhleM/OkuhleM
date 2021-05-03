---
Layout:
Title:	"Daily Report about localStorage"
Date:	2021-04-03
Categories:

---

# Introduction

today I'll be talking about the local storage.

# Body

Local storage is the storing of data locally without using any php.
it's done purely inside and within javascript inside the web browser.

actually local storage is the ability to store information locally in the browser.
it must be saved in as a string format (JSON).
it is able to store from 200mb upwards.

>> localStorage.setItems
 * The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

     syntax
    storage.setItem(keyName, keyValue);

> Parameters
keyName
A DOMString containing the name of the key you want to create/update.
keyValue
A DOMString containing the value you want to give the key you are creating/updating.

>> Storage.getItem()
* The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.

      syntax

      var aValue = storage.getItem(keyName);

> Parameters
keyName
A DOMString containing the name of the key you want to retrieve the value of.

>> Storage.removeItem()
* The removeItem() method of the Storage interface, when passed a key name, will remove that key from the given Storage object if it exists

  syntax
storage.removeItem(keyName);

> Parameters
keyName
A DOMString containing the name of the key you want to remove.

# conclusion

The key-value pairs represent storage objects, which are similar to objects except they remain intact during page loads, and are always strings. You can access these values like an object or using the getItem() method