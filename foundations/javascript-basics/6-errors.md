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
