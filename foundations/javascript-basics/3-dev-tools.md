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
