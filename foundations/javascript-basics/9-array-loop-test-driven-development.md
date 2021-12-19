# 9. Fundamentals 4

## Arrays:
#### Array basics (https://www.w3schools.com/js/js_arrays.asp)
- Arrays:
      + ordered collections of items (Strings, numbers, or other things)
      + An array can hold many values under a single name, and you can access the values by referring to an index number.

- Create an array:
      + array literal: const array_name = [item1, item2, ...];
      + common practice to declare arrays with the const keyword.
      + Spaces and line breaks are not important. A declaration can span multiple lines:
      + can create an array, and then provide the elements:
            const cars = [];
            cars[0]= "Saab";
            cars[1]= "Volvo";
      + can use JavaScript Keyword new but not recommended:
            const cars = new Array("Saab", "Volvo", "BMW");

- Access and change array elements: refer to the index number starting at 0:
      const cars = ["Saab", "Volvo", "BMW"];
      let car = cars[0];
      cars[0] = "Opel";

- Access the full array: by referring to the array name:
      const cars = ["Saab", "Volvo", "BMW"];
      document.getElementById("demo").innerHTML = cars;

- Array vs object:

| Array | Object |
|---|---|
|a special type of objects, typeof operator in JavaScript returns "object" for arrays, but best described as arrays | objects |
| use numbers to access its "elements": <br> const person = ["John", "Doe", 46]; <br> person[0]; // John | use names to access its "members" <br> const person = {firstName:"John", lastName:"Doe", age:46}; <br> person.firstName // John|
| use numbered indexes | use named indexes.|
| used when you want the element names to be numbers | used when you want the element names to be strings (text) |


- Array elements: can be object, function and array
      myArray[0] = Date.now; // object
      myArray[1] = myFunction; // function
      myArray[2] = myCars; // array


- Array built-in properties:
      + length Property: returns the length of an array (the number of array elements)
            const fruits = ["Banana", "Orange", "Apple", "Mango"];
            let length = fruits.length; // 4
        => always one more than the highest array index


- Loop array elements:
      + use a for loop
      + use the Array.forEach() function:
            myArray.forEach(myFunction); // call myFunction for each element of myArray

- Associative array (hash): array with named indexes
      + JS doesn't support hashes, arrays always use numbered indexes
      + If named indexes are used, JavaScript will redefine the array to an object => some array methods and properties will produce incorrect results

#### Array methods (https://www.w3schools.com/js/js_array_methods.asp)
https://replit.com/@linh15/array-methods

- Output an array: JavaScript automatically converts an array to a comma separated string when a primitive value is expected. This is always the case when you try to output an array.


## Loops
(https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)

#### Why loop?
- Programming loops are all to do with doing the same thing over and over again, which is termed iteration in programming speak.
- A loop usually has one or more of the following features:
      + A counter, which is initialized with a certain value
      + A condition, which is a true/false test to determine whether the loop continues to run, or stops — usually when the counter reaches a certain value.
      + An iterator, which generally increments the counter by a small amount on each successive loop until the condition is no longer true.

#### for loop construct:

      for (initializer; condition; final-expression) {
        // code to run ;
      }

#### infinite loop:
you must make sure that the initializer is incremented or, depending on the case, decremented, so that it eventually reaches the point where the condition is not true. If not, the loop will go on forever, and either the browser will force it to stop, or it will crash

### Exist loop with break:
-  a break statement will immediately exit the loop and make the browser move on to any code that follows it

#### Skip iteration with continue:
- The continue statement works in a similar manner to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop => skip the lines after it and start the next iteration

#### while

      initializer;
      while (condition) {
        // code to run;

        final-expression;
      }

      => similar way to the for loop
      => except that the initializer variable is set before the loop
      => and the final-expression is included inside the loop after the code to run

#### do ... while

      initializer;
      do {
        // code to run;

        final-expression;
      } while (condition);

      => the condition comes after everything else, wrapped in parentheses and preceded by a while keyword
      => the code inside the curly braces is always run once before the check is made to see if it should be executed again
      => in while and for, the check comes first, so the code might never be executed


## Test Driven Development (TDD):
- write automated tests that describe how your code should work before you actually write the code
- much more productive than writing code without tests


## Practice
#### 04_removeFromArray
- arguments object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

      + Array-like object accessible inside functions
      + contains the values of the arguments passed to that function
      + array-like object: arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() or map()
            function func(a, b, c) {
              console.log(arguments[0]); // a
              console.log(arguments[1]); // b
              console.log(arguments[2]); // c
            }

      + useful for functions called with more arguments than they are formally declared to accept => example function accepts any number of string arguments and returns the longest one:
            function longestString() {
              let longest = '';
              for (let i = 0; i < arguments.length; i++) {
                if (arguments[i].length > longest.length) {
                  longest = arguments[i];
                }
              }
              return longest;
            }

        + has to be converted to array to use array methods:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
            function func() {
              return args = Array.from(arguments);
            }
            func(a,b,c); // [a,b,c]


- rest parameter:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
      + allows a function to accept an indefinite number of arguments as an array
            function f(a, b, ...theArgs) {
              console.log(theArgs);
             }
            f(a,b,c,d,e,f); // [c,d,e,f]
      + is the last parameter in a function definition
      + prefixed with "..." (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within a standard JavaScript array
      + Only the last parameter in a function definition can be a rest parameter
