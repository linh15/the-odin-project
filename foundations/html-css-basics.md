* Why do we separate HTML and CSS?
HTML is the structure of the page, CSS is the design and styling of the page

* HTML
1. What is a div and how are they used?
div is division element, used to contain other elements for general purposes.

2. What are tags?

3. What are elements?

4. What is the “query string” in a URL and what does it do?

5. For accessibility in HTML, what is the attribute used to describe an image (on screen readers or if it fails to load)?
alternative: alt=""

6. For a responsive website, should it be designed mobile-first or desktop-first?
https://brainleaf.com/blog/web-design/mobile-first-vs-desktop-first-how-to-choose-a-responsive-strategy/

* CSS
1. What are classes and IDs (and how are they different)?

2. What are attributes?

3. What are forms?

4. What are selectors?

5. What are properties?

6. What are values?


7. What is the difference between “pixels” and “ems”?
pixel is the absolute unit.
em is relative to the element's font size.

8. How do CSS styles for a particular element get inherited? i.e. how does an element get its “default” styles?
an element gets style from these, in this hiarachical order: !important, inline style, id, its latest class, "body" element
the former overrides the latter, with !important being the most powerful.

9. What are two CSS attributes you can change to push an element around on the page?
padding
margin
also: position???

10. What are the three different ways to include CSS in your project or use CSS to style a particular element?
- inline
add the style="" attribute to each HTML tag
- external
create an external .css file and add reference to the HTML document
- internal
add <style> tag in a section of the HTML document
https://www.hostinger.com/tutorials/difference-between-inline-external-and-internal-css

11. What is the “default stylesheet” or “user agent stylesheet”?
the default stylesheet of the browser that shows the content if not overriden or if there is no stylesheet specified by the page or user

12. Why use a CSS reset file?
to override the default stylesheet, to make the page look the way you want it to do

13. What is the difference between CSS Grid and Flexbox?
- Flexbox: one-dimensional layout, align content in either rows or columns, focus on content flow (content shapes the layout), for alignment, used when:
+ You have a small design to implement  
+ You need to align elements  
+ You need a content-first design 

- Grid: two-dimensional layout, align content in both rows and columns, focus on content placement (layout shapes the content), for layout, used when:
+ You have a complex design to implement
+ You need to have a gap between block elements
+ You need to overlap elements
+ You need a layout-first design

https://blog.hubspot.com/website/css-grid-vs-flexbox
https://webdesign.tutsplus.com/articles/flexbox-vs-css-grid-which-should-you-use--cms-30184
https://blog.logrocket.com/flexbox-vs-css-grid/

14. Describe the components of the CSS **Box Model**.
each box has 3 properties:
- padding: space around content
- border: solid line outside padding
- margin: space around outside border
CSS treats each HTML element as its own box, which is usually referred to as the CSS Box Model.
Block-level items automatically start on a new line (think headings, paragraphs, and divs) while inline items sit within surrounding content (like images or spans). The default layout of elements in this way is called the **normal flow** of a document, but CSS offers the position property to override it. (https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-an-elements-relative-position)

15. In CSS, what is a breakpoint?
the point where the website content responds according the width of the device.

16. What are the two main groups of CSS properties that control typography style?
font and text

17. What is the !important rule in CSS?
used to override all other styles in CSS to make sure an element has specific CSS

* Notes: HTML
<div> - groups content (no relationship between groups of content)
<section> - groups related content (like a chapter of a book)
<article> - groups independent, self-contained content (like a book); works well with blog entries, forum posts, or news articles.

- head element: contains the page's title, meta information, etc.
- header (in the body): wraps introductory information or navigation links for its parent tag and works well around content that's repeated at the top on multiple pages.

* Notes: CSS Flexbox
- Viewport units, like percentages, are relative units, but they are based off different items.
Viewport units are relative to the viewport dimensions (width or height) of a device
percentages are relative to the size of the parent container element.

- display: flex => putting item in a flex container
if flex-direction: row, items are put side-by-side in a row
if flex-direction: column, items are stacked top-to-bottom in a column
the direction (row/column) is called the main axis

- justify-content property => aligns flex items along the main axis
align-items property => align flex items along the cross axis

* Notes: CSS Grid
- In CSS Grid, the parent element is referred to as the container and its children are called items.

* CSS reset:
Because each browser has its own default stylesheet, my CSS style may not be showed when users open it in different browsers.
=> use CSS reset to always override the browser's default stylesheet and use my own CSS stylesheet instead
https://www.youtube.com/watch?v=14Vb6tZCjEY&ab_channel=shreeve21
