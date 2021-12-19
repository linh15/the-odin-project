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
