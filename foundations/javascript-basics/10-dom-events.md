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
