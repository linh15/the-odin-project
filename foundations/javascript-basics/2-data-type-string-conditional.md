# 2. Fundamentals 1: Data types, strings, conditionals
## Data types
(https://javascript.info/types)

8 basic data types

## Strings
#### String basics
(https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
- Basics:
  + create a string
  + single vs double quotes
  + escape characters


- Concatenate strings
  + strings + strings
  + string + number


- Template literals

#### String methods and properties
(https://www.w3schools.com/js/js_string_methods.asp)

- Length: text.length()


- Extract a part:
  + slice(start, end): end not included, negative counts from the end
  + substring(start, end): end not included, no negative, negative treated as 0
  + substr(start, length): negative start counted from the end


- Replace content:
  + replace('value', 'newValue'): only first match, case sensitive, doesn't change string but returns a new one


- Convert to upper and lower case
  + text.toUpperCase()
  + text.toLowerCase()


- Join 2 or more strings
  + text1.concat(' ', text2, text3, text4)


- Trim whitespaces from both sides
  + text.trim()


- Padding (ECMAScript 2017):
  + text.padStart(totalLengthWithPadding, paddingValue)
        "555".padStart(4,0); => "0555"
  + text.padEnd(totalLengthWithPadding, paddingValue)
        "5".padEnd(4,0); => "5000"


- Extract characters
  + text.charAt(index): gets the character at that index
  + text.charCodeAt(index): gets the unicode of the character at that index
  + text[index]: unpredictable, not recommended, makes strings look like arrays but they are NOT arrays


- Convert to array
  + text.split(separator): returns an array
        text.split(" ") => split on spaces
        text.split("") => split in characters
        text.split() => return array with all text in index 0


- String reference: properties and methods
https://www.w3schools.com/jsref/jsref_obj_string.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
      + Properties:
          constructor	Returns the string's constructor function
          length	Returns the length of a string
          prototype Allows you to add properties and methods to an object
      + Methods: developer.mozilla.org for reference, or /Khanh_Linh/Documents/JavaScript/string-methods.js

#### Regular expressions
https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD


## Conditionals
#### Comparison
https://javascript.info/comparison

- Boolean is the result

- Compare strings: use dictionary/lexicographical order from the Unicode encoding table, lowercase > uppercase
          'a' > 'A';
    + compare the first letter, if not equal => done, if equal => compare the next letter:
          'z' > 'a';
          'z' > 'abc';
          'az' > 'ab';
    + if 2 strings: all first letters equal and of different length => longer is greater
          'beee' > 'bee';

- Compare different types: values get converted

- Compare strictly: strict equality => check equality without converting types

- Compare with null and undefined: == each other, not === each other, not equal to any other value; treat them with extra care

#### JS conditionals
https://www.w3schools.com/js/js_if_else.asp

- Conditional statement: perform different actions based on different conditions

- if statement: execute a code block if a condition is true

- else statement: execute a code block if the condition is false

- else if statement: specify a  new condition if the first condition is false

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

- if..else statement:
      + else can be omitted, but then the code will always run, so be extra careful
            if (condition {
              some code;
            })
            some other code; // always run
      + shorthand style without curly braces => valid but not recommended
            if (condition) some code
            else some other code
      + Notes on testing boolean values: any value not false, undefined, null, 0, NaN or empty string will return true when tested as a condition, so variable name can be used on its own to test if it is true
            if (variableName) { // = if (variableName == true)
              some code;
            }

- switch statement (similar to if else): to set a variable to a certain choice of value, or to print our a particular statement depending on a condition, especially when having a large number of choices
      switch (variable) {
        case value1:
          code1;
          break;

        case value 2:
          code2;
          break;

        ...

        default:
          code otherwise;
      }
  Note: default is not mandatory, used to handle unknown cases

  Fall-through/common code blocks: different cases use the same code:
        switch (variable) {
          case val1:      // val1 and val2 share the same code block
          case val2:
            some code;
            break;
          case val3:
          ...
          default:
            some code;
        }

  Condition in each case: check if condition of a case is true: (https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript)
        switch (true) {
          case condition1:
            code1;
          case condition2:
            code2;
          ...
          default:
            some code;
        }


- Ternary operator: shorter version of if else, used when there are two choices made from a true/false condition. Use only if code is short (return a value), use if else for code block if there's more code.
      (condition) ? run this code : run this code instead;
      or
      let variable = (condition) ? val1 : val2;

  Multiple '?': return different values based on different conditions: (https://javascript.info/ifelse)
      let variable = (condition1) ? value1    // if condition1 true, variable = value1
                    (condition2) ? value2 :   // if condition2 true, variable = value2
                    ...
                    defaultValue;           // else/otherwise, variable = defaultValue

#### Logical operators
https://javascript.info/logical-operators

- OR ||: test if any condition is true
      + short-circuit evaluation: evaluates from left to right, stop immediately upon finding the first truthy value


- AND &&: test if all condition is true
      + short-circuit evaluation: evaluates from left to right, stop immediately upon finding the first falsy value
      + higher precedence than OR:
            a && b || c && d equal to (a && b) || (c && d)

- NOT !: highest precedence => always execute first
