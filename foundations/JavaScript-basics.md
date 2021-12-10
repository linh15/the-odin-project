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


# 6. Understanding Errors
- The Anatomy of an Error:
      + An error:
            - a type of object built into the JS language
            - consisting of a name/type and a message
            - contain crucial information that can assist you in locating the code responsible for the error, determining why you have this error, and resolving the error
      + The first part: displays the type of error. This provides the first clue as to what you’re dealing with
      + The next part of an error gives us the name of the file in which you can find the error (in this case, our script.js), and also the line number. This allows you to easily navigate to the problematic line in your code.
      + Another important part of an error is the stack trace. This helps you understand when the error was thrown in your application, and what functions were called that led up to the error.

-  Common Types of Errors:
      + Syntax Error: occurs when the code you are trying to run is not written correctly, i.e., in accordance with the grammatical rules of JavaScript.
      + Reference Error: arises because whatever variable you are trying to reference does not exist (within the current scope) - or it has been spelt incorrectly
      + Type Error: occurs when
            - an operand or argument passed to a function is incompatible with the type expected by that operator or function
            - attempting to modify a value that cannot be changed
            - attempting to use a value in an inappropriate way
        => consider the data type you are trying to run a method or operation against. You’ll likely find that it is not what you think, or the operation or method is not compatible with that type.

- Tips for Resolving Errors:
      + Read the error carefully, try to understand it on your own.
      + Google the error!
            => a fix or explanation on StackOverflow or in the documentation
            => or more clarity as to why you are receiving this error.
      + Use the debugger: set breakpoints, view the value of any given variable at any point in your application’s execution, step through code line by line, etc.
      + Make use of the console:
            - console.log() is great for getting immediate feedback without needing to step through your functions
            - other useful methods such as: https://www.w3schools.com/jsref/obj_console.asp
                  console.table(): Displays tabular data as a table
                  console.trace(): Outputs a stack trace to the console


- Errors VS. Warnings:
      + Errors will stop the execution of your program or whatever process you may be attempting to run and prevent further action.
            - typically shown in red
      + Warnings, are messages that provide you insight on potential problems that may not necessarily crash your program at runtime, or at all!
            - not as significant as errors
            - more likely to be informational
            - should be addressed if possible and as soon as possible
            - typically shown in yellow


- 2 main types of errors: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong
      + Syntax errors:
            - spelling errors in your code that actually cause the program not to run at all, or stop working part way through
            - you will usually be provided with some error messages too
            - easier to fix: know what the error messages mean and familiar with the right tools
      + Logic errors:
            - errors where the syntax is actually correct but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results
            - there usually isn't an error message to direct you to the source of the error
            - harder to fix


- JavaScript error reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors


# 7. Project: Rock-Paper-Scissors
First version of the game, no UI, play in console.

# 8. Clean code
- Why writing clean code?
      + SO MUCH more time reading code than writing it
      + learn to write readable code => save time to use, maintain, or further develop your code
- What constitutes great JavaScript code: the most important thing CONSISTENCY
- Rules of thumb:
      + Indentation: consistent. Atoms and others use 2 spaces for indentation.
      + Semicolons: always add it. Even though it's optional, JS compiler can add them if missing but this functionality can break and cause bugs.
      + Line length:
            - limiting the length of each line
            - general rule: manually break lines that are longer than about 80 characters
            - watch out the line in code editors displaying the threshold
            - indent the second line 2 levels
            - break after an operator or a comma
      + Name things:
            - be descriptive and always use camelCase
            - keep consistent and easy to read
            - variables: begin with a noun or an adjective (noun phrase)
            - functions: begin with a verb
            - in loops or callback functions: ok to use single characters for variable names, but not elsewhere

-  10 principles for clean code (https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/):
        1. Revise Your Logic Before Coding:
            + verify the logic behind lines of code before typing
            + use flow diagrams or written pseudo-code
            + writing it down first can clarify many doubts or insecurities about complex functionality
        2. Clearly Expose the Structure of the Page:
            + name DIV containers after their destined content => give them a representative ID
            + eg. <div id='main-container'>, <div id='footer'>,...
        3. Use the Correct Indentation:
            + easier to distinguish the exact place where an element is opened and closed
        4. Write Explanatory Comments
            + very effective way of code documentation
            + easy, fast, and very straight-to-the-point
            + can be read at the exact moment of doubt
        5. Avoid Abusing Comments:
            + Examples of bad comments:
              - Writing explanatory notes to self (e.g. /* Will finish this later… */).
              - Blaming stuff on other people (e.g. /* John coded this. Ask him. */).
              - Writing vague statements (e.g. /* This is another math function. */).
              - Erasing chunks of code: not sure of erasing things and comment that code instead.
            + Examples of good comments:
               - Authoring specifications (e.g. /* Coded by John, November 13th 2010 */).
               - Detailed statements on the functionality of a method or procedure (e.g. /* This function validates the login form with the aid of the e-mail check function */).
               - Quick notifications or labels that state where a recent change was made (e.g. /* Added e-mail validation procedure */).
        6. Avoid Extremely Large Functions:
            + break up large functions into smaller ones
        7. Use Naming Standards for Functions and Variables
            + make them descriptive enough to give a general idea of what it does or what it’s for
        8. Treat Changes with Caution: when a need for adding, removing, or changing something => not meddle with previous efforts for maintaining the code clean and ordered.
            + Keeping the correct indentations (e.g. when inserting an IF clause, its contents’ indentations will be augmented).
            + Commenting on the modification made or broadening the existing comments.
            + Respecting standards in use.
        9. Avoid Indiscriminate Mixing of Coding Languages:
            + examples:
                - in-line CSS styling => huge element tags with an embedded STYLE property
                - scattered JavaScript tags with short procedures within them => interruptions in the flow of the structure
            + => appropriately divide different coding languages
        10. Summarize Your Imports
            + additional coding languages imported from different files => summarize the ones in the same language into one or two
            + eg. many CSS style sheets => summarize in one => import
            + => save space, look clean, save loading time, more efficient

- Coding Without Comments (https://blog.codinghorror.com/coding-without-comments/):
      + Always write your code as if comments didn't exist:
       => forces you to write your code in the simplest, plainest, most self-documenting way you can humanly come up with.
      + When rewritten, refactored, and rearchitected your code a dozen times to make it easy for your fellow developers to read and understand and can't possibly imagine any conceivable way your code could be changed to become more straightforward and obvious
      => then, and only then, add a comment explaining what your code does.

- Code Tells You How, Comments Tell You Why (https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/):
      + No matter how simple, concise, and clear your code may end up being, it's impossible for code to be completely self-documenting. Comments can never be replaced by code alone.
      + Code can't explain why the program is being written, and the rationale for choosing this or that method.
      + Code cannot discuss the reasons certain alternative approaches were taken.

- Beautiful JavaScript: Easily Create Chainable (Cascading) Methods for Expressiveness (https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/):
      + Chaining Methods, also known as Cascading: eg. $("#wrapper").fadeOut().html("Welcome, Sir").fadeIn();
            - refers to repeatedly calling one method after another on an object, in one continuous line of code.
            - This technique abounds in jQuery and other JavaScript libraries and it is even common in some JavaScript native methods.
            - It allows us to read code like a sentence, flowing gracefully across the page. It also frees us from the monotonous, blocky structures we usually construct.
      + Why Use Cascading in JavaScript?
            - There is no need to create temporary variables to save each step of the process.
            - every line of code clearly and succinctly expresses what it is doing, particularly when the name of each method is defined using verbs.
            - Our code is more maintainable because we have simple, lean, specialized methods.
            - one can easily read the “chainable” code, effortlessly type it, and comfortably understand it.

- Airbnb style guide (https://github.com/linh15/javascript): Airbnb JavaScript Style Guide - A mostly reasonable approach to JavaScript: guide to write clean code in JS.

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


# 10. DOM manipulation
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation#dom---document-object-model

#### DOM - Document Object Model

- tree-like representation of the contents of a webpage
- a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document
- JavaScript is run whenever the JS file is run, or when the script tag is encountered in the HTML => if JavaScript at the top of HTML file, many of DOM manipulation methods will not work because the JS code is being run before the nodes are created in the DOM:
      + include JavaScript at the bottom of HTML file so that it gets run after the DOM nodes are parsed and created.
      + link the JavaScript file in the <head> of HTML document. Use the <script> tag with the src attribute containing the path to the JS file, and include the defer keyword to load the file after the HTML is parsed
            <head>
             <script src="script.js" defer></script>
            </head>
- JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders


#### Targeting nodes with selectors
=> use “selectors” to target the nodes you want to work with:
- CSS-style selectors: eg. <div class="display"></div> => .display
- relational selectors (relationship properties): eg. firstElementChild, previousElementSibling, lastElementChild
(cf. https://www.w3schools.com/jsref/dom_obj_all.asp for more HTML element object properties and methods)
identifying a certain node based on its relationships to the nodes around it

#### DOM methods:
HTML code is parsed by a web browser => converted to the DOM - a tree of nodes => nodes are objects that have many properties and methods attached to them

- Query selectors:
      + element.querySelector('selector'): returns reference to the first match of selector
            const container = document.querySelector('#container');
      + element.querySelectorAll('selectors'): returns a “nodelist” containing references to all of the matches of the selectors => nodelist, not array, several array methods are missing from nodelists => if problems arise, convert the nodelist into an array using Array.from() or the spread operator.
            const controls = document.querySelectorAll('.controls');

- Create elements:
      + document.createElement(tagName, [options]): creates a new element of tag type tagName. [options] means you can add some optional parameters to the function.
      + does NOT put your new element into the DOM => simply creates it in memory, you can manipulate the element (by adding styles, classes, ids, text etc.) before placing it on the page.

- Append elements:
      + parentNode.appendChild(childNode): appends childNode as the last child of parentNode
      + parentNode.insertBefore(newNode, referenceNode): inserts newNode into parentNode before referenceNode

- Remove elements:
      + parentNode.removeChild(child): removes child from parentNode on the DOM and returns reference to child

- Alter elements:
      + add inline styles: http://domenlightenment.com/#6.2 => need to use camelcase or bracket notation when accessing a kebab-cased css rule from JS:
            div.style.backgroundColor // accesses the divs background-color style
            div.style['background-color'] // also works
            div.style.cssText = "background-color: white" // ok in a string

      + edit attributes:
            div.setAttribute('id', 'theDiv');  // if id exists, update it to 'theDiv'. Otherwise, create an id with value "theDiv"
            div.getAttribute('id'); // returns value of specified attribute => "theDiv"
            div.removeAttribute('id'); // removes specified attribute

      + work with classes
            div.classList.add('new'); // adds class "new" to your new div
            div.classList.remove('new'); // remove "new" class from div
            div.classList.toggle('active'); // if div doesn't have class "active" then add it, or if it does, then remove it

      + add text content: preferable for adding text
            div.textContent = 'newContent';

      + add HTML content: not recommended, can create security risks if misused (https://www.youtube.com/watch?v=ns1LX6mEvyM&ab_channel=WebDevSimplified)
            div.innerHTML = '<span>Hello World!</span>'; // renders the html inside div

#### Events
- actions that occur on your webpage such as mouse-clicks or keypresses
- using JavaScript we can make our webpage listen and react to these events => three primary ways:
      + attach functions’ attributes directly on your HTML elements: not ideal
            <button onclick="alert('Hello World')">Click Me</button>
              => cluttering our HTML with JavaScript
              => can only have 1 “onclick” event per element.

      + set the “on_event_” property on the DOM object in your JavaScript: a little better
            <button id="btn">Click Me</button> // HTML
            const btn = document.querySelector('#btn'); // JS
            btn.onclick = () => alert("Hello World");
              => moved the JS out of the HTML and into a JS file
              => a DOM element can only have 1 “onclick” property

      + attach event listeners to the nodes in your JavaScript: a bit more complex to set up but much more flexible and powerful => preferred method
            <button id="btn">Click Me Too</button> // HTML
            const btn = document.querySelector('#btn'); // JS
            btn.addEventListener('click', () => {
              alert("Hello World");
            });
              => maintain separation of concerns
              => allow multiple event listeners if the need arises

- Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places.

- access more information about the event by passing a parameter to the function that we are calling

- Attaching listeners to groups of nodes:
      + get a nodelist of all of the items matching a specific selector with querySelectorAll('selector')
      + iterate through the whole list to add a listener to each of them

- Some useful events: https://www.w3schools.com/jsref/dom_obj_event.asp
      click
      dblclick
      keypress
      keydown
      keyup

# 11. Revisit Rock-Paper-Scissors

# 12. Project Etch-A-Sketch

- Loop in JS to create 16x16 grid: https://code-boxx.com/create-grid-javascript/
- Create 16 columns automatically with repeat() in CSS grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#track_listings_with_repeat_notation
- Create responsive square divs with grid: https://dev.to/stretch0/a-grid-layout-with-responsive-squares-59c6
- onmouseover in JS: https://www.w3schools.com/jsref/event_onmouseover.asp
- addEventListener on all elements of a class: https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class

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

# Notes: Additional resources that I haven't worked on:
- Regular expressions: https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD
- DOM:
      + Eloquent JS: https://eloquentjavascript.net/14_dom.html, https://eloquentjavascript.net/15_event.html
      + Enlightenment series: DOM http://domenlightenment.com/
      + w3schools DOM: https://www.w3schools.com/js/js_htmldom.asp
