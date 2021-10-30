# 1. Fundamentals 1: Variables, numbers, operators

## Variables
https://javascript.info/variables

## Numbers
- https://www.w3schools.com/js/js_numbers.asp

- https://www.w3schools.com/js/js_arithmetic.asp

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math

- https://javascript.info/operators => frustration when doing tasks:
Type conversion: haven't learned data type!!!!
Fix the addition: don't know that promt() returns string, also this requires knowledge of data type


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
Trim whitespaces from both sides
  + text.trim()
Padding (ECMAScript 2017):
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


- String reference
https://www.w3schools.com/jsref/jsref_obj_string.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  


## Conditionals
#### Comparison
