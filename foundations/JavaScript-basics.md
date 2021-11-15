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
              - A breakpoint: lets you pause your code in the middle of its execution, and examine all values at that moment in time => help you find and fix bugs faster than the console.log() method
      Step 4: Step through the code
      Step 5: Set a line-of-code breakpoint
      Step 6: Check variable values: DevTools provides a lot of tools for examining variable values:
              Method 1: The Scope pane:
                        When you're paused on a line of code, the Scope pane shows you what local and global variables are currently defined, along with the value of each variable. It also shows closure variables, when applicable
              Method 2: Watch Expressions:
                        lets you monitor the values of variables over time
              Method 3: The Console:
                        evaluate arbitrary JavaScript statements. In terms of debugging, you can use the Console to test out potential fixes for bugs

      Step 7: Apply a fix
      ===> This workflow only applies a fix to the code that is running in your browser. It won't fix the code for all users that visit your page. To do that, you need to fix the code that's on your servers.

      + Pause your code with breaking points
          - Overview of when to use each breakpoint type:
          - Line-of-code breakpoints
                Line-of-code breakpoints in your code
          - Conditional line-of-code breakpoints
                Manage line-of-code breakpoints
          - DOM change breakpoints
                Types of DOM change breakpoints
          - XHR/Fetch breakpoints
          - Event listener breakpoints
          - Exception breakpoints
          - Function breakpoints
                Make sure the target function is in scope


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

- timing: used to start a timer in order to track the duration of a particular operation. End the timing operation by calling console.timeEnd() and passing in the unique name of the timer
  console.time(label);
  console.timeEnd(label);



# 4. Fundamentals 3
- Functions — reusable blocks of code
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
  + Built-in browser functions: for example Math.random(), many call background browser code written in low level system language like C++, some built-in browser functions are not part of the core JavaScript language — some are defined as part of browser APIs

  + A function is a value representing an “action”.
    Regular values like strings or numbers represent the data.
    A function can be perceived as an action.
    We can pass it between variables and run when we want.

  + Functions versus methods: Programmers call functions that are part of objects methods

  + Invoking functions: call a function by including the name of the function in the code somewhere, followed by parentheses.

  + Anonymous functions: a function that doesn't have a name:
            function() {
                alert('hello');
            }
    won't do anything on its own, mainly used to run a load of code in response to an event firing — like a button being clicked — using an event handler:
            const myButton = document.querySelector('button');

            myButton.onclick = function() {
                alert('hello');
            }

  + Function declaration and function expression: a function is not a “magical language structure”, but a special kind of value. The meaning of both function declaration and expression is the same: "create a function and put it into the variable myFunction". (https://javascript.info/function-expressions#function-expression-vs-function-declarationfo/function-expressions)
  | Function declaration      |  Function expression |
  |-----|-----|
  |function myFunction() { <br>   alert('hello'); <br> }   | const myFunction = function() { <br> alert('hello'); <br> };  |  
  | It is always hoisted, so you can call function above function definition and it will work fine.  It can be called earlier than it is defined. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”. And after all Function Declarations are processed, the code is executed. So it has access to these functions.| Unlike function declaration, function expressions are not hoisted. It is created when the execution reaches it and is usable only from that moment. Once the execution flow passes to the right side of the assignment, the function is created and can be used (assigned, called, etc. ) from now on.|
  | no semicolon at the end: no need at the end of a code block | needs a semicolon at the end of a statement (assign a function to a variable) |

      Hoisting: JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable and function declarations prior to execution of the code. Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting, the variables are not initialized with a default value of undefined; until the line in which they are initialized is executed, any code that accesses these variables will throw an exception. (https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

  + Function parameters: Some functions require parameters to be specified when you are invoking them
        - requires no parameter: eg. the browser's built-in Math.random() function
        - requires a number of parameters: eg. the browser's built-in string replace() function needs two parameters
        - parameters are optional: if no parameter is specified, the function will generally adopt some kind of default behavior: eg. the array join() function's parameter is optional, f no parameter is included to specify a joining/delimiting character, a comma is used by default.

  + Function scope and conflicts:
        When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions. If a function call a variable not in the same function scopes — the variable is effectively invisible to this function call.
        The top level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.
        Notes: The same scoping rules do not apply to loop (e.g. for() { ... }) and conditional blocks (e.g. if() { ... }) — they look very similar, but they are not the same
        It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data. (https://javascript.info/function-basics#outer-variables)

  + Functions inside functions: you can call a function from anywhere, even inside another function. Just make sure that the values being used inside the function are properly in scope

- Function return values: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
      return values = the values that a function returns when it has completed.
      A return value is used where the function is an intermediate step in a calculation of some kind.
      To return a value from a custom function, you need to use the return keyword
      Tips:
        - write error handling into functions to check that any necessary parameters are validated, and that any optional parameters have some kind of default value provided
        - create a function library. As you go further into your programming career, you'll start doing the same kinds of things over and over again. It is a good idea to create your own library of utility functions to do these sorts of things. You can copy them over to new code, or even just apply it to HTML pages wherever you need it.
      A function with an empty return or without it returns undefined (https://javascript.info/function-basics#returning-a-value)


- Default parameter: (https://javascript.info/function-basics#default-values):
      a parameter is not passed with an argument when a function is called, its value is 'undefined' by default. We can specify the default value of a parameter (to be used if not provided) using = when declaring the function:
        function funcName(para1 = value1) {
          some code;
        }
        funcName(); // called without arguments, para1 becomes value1
        funcName(x); // called with argument x, para1 becomes x

- Name a function: (https://javascript.info/function-basics#function-naming):
      + Functions are actions. So their name is usually a verb.
      + start a function with a verbal prefix which vaguely describes the action
      + Function starting with…
          "get…" – return a value,
          "calc…" – calculate something,
          "create…" – create something,
          "check…" – check something and return a boolean, etc
      + One function – one action. A function should do exactly what is suggested by its name, no more.

- Callback functions: https://www.w3schools.com/js/js_callback.asp
      A callback is a function passed as an argument to another function
      This technique allows a function to call another function
      A callback function can run after another function has finished
      JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
      When to Use a Callback? Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).


- Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
      Differences & Limitations:
      + Does not have its own bindings to this or super, and should not be used as methods.
      + Does not have new.target keyword.
      + Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
      + Can not be used as constructors.
      + Can not use yield, within its body
      Syntax:
      + One param: (simple expression, return is not needed):
            myFunc = param => expression
      + Multiple params: require parentheses (simple expression, return is not needed):
            myfunc = (param1, paramN) => expression
      + Multiline statements: require body braces and return:
            myFunc = para => {
              some code;
              return output;
            }
      + Multiple params: require parentheses. Multiline statements require body braces and return:
            myFunc = (param1, paramN) => {
              some code;
              return output;
            }


- Call stack:
https://www.javascripttutorial.net/javascript-call-stack/
https://developer.mozilla.org/en-US/docs/Glossary/Call_stack
      A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
      The call stack works based on the LIFO principle i.e., last-in-first-out.
        + When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
        + Any functions that are called by that function are added to the call stack further up (top of the stack), and run where their calls are reached.
        + When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
        + If the stack takes up more space than it had assigned to it, it results in a "stack overflow" error.



# 5. Problem solving
- Problem solving is the core thing software developers do. The programming languages and tools they use are secondary to this fundamental skill.
      “Problem solving is writing an original program that performs a particular set of tasks and meets all stated constraints.” - Think Like a Programmer - V. Anton Spraul

  + The set of tasks can range from solving small coding exercises all the way up to building a social network site like Facebook or a search engine like Google. Each problem has its own set of constraints, for example, high performance and scalability may not matter too much in a coding exercise but it will be vital in apps like Google that need to service billions of search queries each day.

  + The best way to improve your problem solving ability is by building experience by making lots and lots of programs. The more practice you have the better you’ll be prepared to solve real world problems.

- Problem solving process:
  + Understand the Problem: understand exactly what the problem is.
        - Don’t understand the problem:
              -> won’t know when you’ve successfully solved it
              -> may waste a lot of time on a wrong solution
        - To gain clarity and understanding of the problem:
              -> write it down on paper
              -> reword it in plain English until it makes sense to you
              -> draw diagrams if that helps.
              -> When you can explain the problem to someone else in plain English, you understand it.
  + Plan: plan out how you’re going to solve the problem
        - Ask some questions:
              -> User interface? If yes, how? What functionality? -> Sketch this on paper
              -> What inputs? Data from user input or from somewhere else?
              -> Desired output?
              -> Given inputs -> what steps needed to return the desired output?
        - Write out an algorithm to solve the problem: a recipe for solving a particular problem -> defines the steps that need to be taken by the computer to solve a problem in pseudo code.

  + Pseudo code: write out the logic for your program in natural language instead of code => slow down and think through the steps your program will have to go through to solve the problem

  + Divide and conquer:
        - Break the big problem down
        - Solve each of the smaller problems until you’ve solved the big problem, starting with the simplest

- When stuck: https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/
  + Debug: Go step by step through your solution trying to find where you went wrong. Programmers call this debugging (in fact, this is all a debugger does).
  + Reassess: Take a step back. Look at the problem from another perspective. Is there anything that can be abstracted to a more general approach? Another way of reassessing is starting anew. Delete everything and begin again with fresh eyes.
  + Research: Ahh, good ol’ Google. You read that right. No matter what problem you have, someone has probably solved it. Find that person/ solution. In fact, do this even if you solved the problem! (You can learn a lot from other people’s solutions). Don’t look for a solution to the big problem. Only look for solutions to sub-problems. No struggle => no learning => waste time.

- Practice:  If you want to be a good problem-solver, solve a lot of problems! How to practice? There are options out the wazoo! Chess puzzles, math problems, Sudoku, Go, Monopoly, video-games, cryptokitties, bla… bla… bla…. What you should do is find an outlet to practice. Something that allows you to solve many micro-problems (ideally, something you enjoy). For example, I enjoy coding challenges. Every day, I try to solve at least one challenge (usually on Coderbyte). Like I said, all problems share similar patterns.

- How to begin thinking like a programmer (Andy Harris): https://www.youtube.com/watch?v=azcrPFhaY9k&ab_channel=CodingTech
      + "You need to learn to be as mind-numbingly stupid as a computer"
      + "The secret isn't code, the secret is algorithms and data"
      + What I wish I'd been taught:
            + Programming isn't about languages, they ultimately don't matter
            + Not a lot of memorizing
            + Most programming isn't about math
            + Programming languages are simpler than human languages
            + Programming is really about solving problems
            + Programming is explaining things to the stupid computer
      + Coding isn't about language, it has about 8 concepts
            + They work in almost the same way in every languages
            + Learn how to use these concepts in English
            + Write out the concept first and then convert to code later
            + Most beginners think they don't understand what code to write
            + Real problem: they don't really understand the problem they're trying to solve
      + Comments are code:
            + Comments explain code to other programmers and yourself
            + Code explains comments to the computer
      + Failure is wonderful:
            + Normal part of programming
            + Debugging: did you tell it what to do incorrectly (implementation problem) or did you tell it the wrong thing (algorithm problem)
            + Most beginners assume implementation problem while it's usually algorithm problem
      + How to debug:
            + What are you not understanding?
            + What tools can you use?
            + Don't start with a solution, start by truly understanding the problem
            + Bad implementation can be googled, bad algorithm usually cannot

- Basic programming techniques - repetitive programming: https://ocw.mit.edu/resources/res-tll-004-stem-concept-videos-fall-2013/videos/problem-solving/basic-programming-techniques/

- Book for references: Think Like a Programmer: An Introduction to Creative Problem Solving by V. Anton Spraul
