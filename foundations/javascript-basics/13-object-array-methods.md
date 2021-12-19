# 13. Fundamentals 5
## Objects
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
https://javascript.info/object

#### Basics
- Object:
      + a collection of related data and/or functionality
      + usually consists of several variables (properties) and functions (methods)

- Syntax:
      const objectName = {
      member1Name: member1Value,
      member2Name: member2Value,
      member3Name: member3Value
      };

- The value of an object member can be pretty much anything
- data items => object's properties
- functions that allow the object to do something with that data => object's methods
- object literal: literally write out the object contents to create it.
- easier to work with than an array, when you want to identify individual items by name.


#### Dot notation

- less powerful but simple, used when property names are known and simple
- access object's properties and methods
- object name = namespace -> entered first to access anything encapsulated in the object: objectName.propertyName or objectName.methodName
- object inside object: objectName.subObjectName.propertyName -> chain the extra step onto the end with another dot

#### Bracket notation

- more powerful but more cumbersome to write -> used when we need something complex
- objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values
- access object properties using bracket notation: objectName['propertyName']
- computed properties: assign value of a variable to a property
eg: let fruit = prompt("Which fruit to buy?", "apple");
    let bag = {
        [fruit]: 5, // the name of the property is taken from the variable fruit
    };  // return orange: 5 if user inputs "orange"

#### Set object members

- set/update/create the value of an object member:
objectName.propertyName = newValue;
objectName['propertyName'] = newValue;

#### this
- "this" keyword refers to the current object the code is being written inside
- is useful when you are dynamically generating objects

#### property value shorthand
https://javascript.info/object#property-value-shorthand
eg: function makeUser(name, age) {
      return {
        name, // same as name: name
        age,  // same as age: age
        // ...
      };
    }

#### property name limitations
- no limitations: can be any strings or symbols, even language-reserved words like “for”, “let”, “return” etc.
- Other types are automatically converted to strings.
- a special property named __proto__: we can’t set it to a non-object value

#### property existence test
- it’s possible to access any property. There will be no error if the property doesn’t exist
- Reading a non-existing property just returns undefined
- test whether the property exists: "propertyName" in objectName; // return true or false
- more accurate to use "in" than use comparison with undefined:
when property exists but its value is stored as undefined -> comparison says it doesn't exist but in fact it does, "in" will return true.

#### for...in... loop

for (let prop in object) {
  // executes the body for each key among object properties
}

=> loop through all properties in the object and apply the code on each of them

## Intermediate/Advanced Array
(https://www.w3schools.com/js/js_array_sort.asp)
(https://www.w3schools.com/js/js_array_iteration.asp)
https://replit.com/@linh15/array-methods

Array.prototype.filter()
Array.prototype.map()
Array.prototype.sort()
Array.prototype.reduce()

Array.prototype.some()
Array.prototype.every()

Array.prototype.find()

Array.prototype.findIndex()
