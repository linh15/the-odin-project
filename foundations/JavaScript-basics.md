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


- String reference
https://www.w3schools.com/jsref/jsref_obj_string.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  


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

#### Regular expressions
https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD


# 3. JavaScript Developer Tools

## Chrome DevTools
https://developer.chrome.com/docs/devtools/

- Open DevTools

- CSS:  
      + CSS view and change:
          View an element's CSS
          Add a CSS declaration to an element
          Add a CSS class to an element
          Add a pseudostate to a class
          Change the dimensions of an element

      + CSS features reference:
          Select an element
          View CSS:
              View the external stylesheet where a rule is defined
              View only the CSS that's actually applied to an element
              View CSS properties in alphabetical order
              View inherited CSS properties
              View an element's box model
              Search and filter an element's CSS
              Toggle a pseudo-class
              View a page in print mode
              View used and unused CSS with the Coverage tab
              Force print preview mode
          Change CSS:
              Add a CSS declaration to an element:
                  Add an inline declaration
                  Add a declaration to a style rule
              Change a declaration name or value
              Change declaration values with keyboard shortcuts
              Add a class to an element
              Toggle a class
              Add a style rule: Choose which stylesheet to add a rule to
              Toggle a declaration
              Change colors with the Color Picker
              Change angle value with the Angle Clock

- Console overview:
      + Viewing logged messages
        Web developers log messages for 2 general reasons:
          Making sure that code is executing in the right order.
          Inspecting the values of variables at a certain moment in time.

      + Running JavaScript

- Simulate mobile devices with Device Mode
      + Limitations: mobile CPU # laptop/desktop CPU => only a first order approximation; to be sure, run the page on a mobile device and use Remote Debugging

      + Simulate a mobile viewport:
            Responsive Viewport Mode: default
                  Show media queries
                  Set the device type
            Mobile Device Viewport Mode:
                  Rotate the viewport to landscape orientation
                  Show device frame
                  Add a custom mobile device
            Show rulers
            Zoom the viewport

      + Throttle the network and CPU: control the speed of network and CPU, Mid-tier mobile simulates fast 3G and throttles your CPU so that it is 4 times slower than normal. Low-end mobile simulates slow 3G and throttles your CPU 6 times slower than normal. Keep in mind that the throttling is relative to the normal capability of your laptop or desktop.
            Throttle the CPU only
            Throttle the network only

      + Override geolocation:
        Select one of the presets from the Location list, or select Other... to enter your own coordinates, or select Location unavailable to test out how your page behaves when geolocation is in an error state.

      + Set orientation: Orientation (Portrait, Landscape, Up, Down)

- Get Started With Viewing And Changing The DOM
      + View DOM nodes
            Inspect a node
            Navigate the DOM Tree with a keyboard
            Scroll into view: lets you quickly reposition the viewport so that you can see the node.
            Search for nodes

      + Edit the DOM
            Edit content
            Edit attributes: change style
            Edit node type: change element type
            Reorder DOM nodes
            Force state: force nodes to remain in states like :active, :hover, :focus, :visited, and :focus-within.
            Hide a node: Press H to hide a node.
            Delete a node

      + Access nodes in the Console: a few shortcuts for accessing DOM nodes from the Console, or getting JavaScript references to them
            Reference the currently-selected node with $0
            Store as global variable: If you need to refer back to a node many times, store it as a global variable.
            Copy JS path: Copy the JavaScript path to a node when you need to reference it in an automated test.

      + Break on DOM changes: DevTools allows you to pause a page's JavaScript when the JavaScript modifies the DOM.

      + Appendix: HTML versus the DOM

      + Appendix: Scroll into view

      + Appendix: Missing options: right-click a node in the DOM Tree and then select an option from the context menu that pops up. If you don't see the specified option in the context menu, try right-clicking away from the node text.

- JavaScript:
      + Debug JS:
      Step 1: Reproduce the bug
      Step 2: Get familiar with the Sources panel UI (Command+Alt+I): 3 parts
              File Navigator pane: every file that the page requests
              Code Editor pane: after selecting a file in the File Navigator pane, the contents of that file are displayed here
              JavaScript Debugging pane: various tools for inspecting the page's JavaScript. If your DevTools window is wide, this pane is displayed to the right of the Code Editor pane
      Step 3: Pause the code with a breakpoint
              - common method console.log(): insert a lot of console.log() statements into the code to inspect values as the script executes
              - A breakpoint: lets you pause your code in the middle of its execution, and examine all values at that moment in time
      Step 4: Step through the code
      Step 5: Set a line-of-code breakpoint
      Step 6: Check variable values
              Method 1: The Scope pane
              Method 2: Watch Expressions
              Method 3: The Console

      Step 7: Apply a fix


      + Pause your code with breaking points













## Chrome DevTools tricks
https://www.youtube.com/watch?v=xkzDaKwinA8&ab_channel=WesBos

- Check which JS code line changes the attribute or makes the effect:
  Right click -> "Break on" -> "attribute modifications" -> a debugger command is popped up and it paused on attribute modifications where the line of code is

- Interpolated value in a string:

  console.log('Hello, I am %s.', 'DaWang'); // Hello, I am DaWang.
  console.log(`Hello I am ${variable}`); // variable = DaWang. -> Hello, I am DaWang.

- Styled:

  console.log('%c Hello', 'font-size: 20px', 'background: yellow') // can add as many CSS attributes as you want

- Warning: print message with warning sign

  console.warn("Watch out!");

- Error: print message with error sign

  console.error("Errr errr");

- Info: print info with info sign

  console.info("Fun fact");

- Testing: show message if condition is false

  console.assert(1 === 1, 'That is wrong'); // show nothing
  console.assert(1 === 2, 'That is wrong'); // show Assertion failed: 'That is wrong'

- Clearing: clear all content in console

  console.clear();

- View DOM elements: show all properties and methods in an element

  console.dir(p); // show a drop down to access info of paragraph element

- Group things together: indents following console messages by an additional level, until console.groupEnd() is called.

  console.group();
  console.groupEnd()
  console.group(label); //label is optional
  console.groupEnd(label)
    + collapse the group:
        console.groupCollapsed();
        console.groupEnd()

- count: prints the number of times that this particular call to count() has been called.

  console.count("Hello"); // Hello: 1
