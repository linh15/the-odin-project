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
