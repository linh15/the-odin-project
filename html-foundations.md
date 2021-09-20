## Element and tag
- Elements: piece of content wrapped in opening and closing tags
Empty elements: have no closing tag, don't wrap any content (eg. img)
- Tags: open <> and close </>
HTML has predefined tags
Important to use correct tags for content (semantic HTML) => how webpage is ranked in search engines, how it is accessible for users  

## Boilerplate
the same basic structure that all HTML documents have before anything else.
- name: always index.html
- DOCTYPE: informs the browser what version of HTML to render the document, <!DOCTYPE html> is for HTML5
- html element: root element of the document, every other element is its descendant
- head element: meta-data about the page, things required for the web to be rendered correctly, not display to users
  + title element: human readable title, displayed in browser tab
  + charset meta element: charset encoding of the webpage, display symbols and characters from different languages
- body element: all content displayed to users

## Text
- paragraph: <p> </p>
- heading: h1 - h6, provide a hierarchy to the content
- strong: <strong> </strong> makes the text bold, semantically marks the text as important (screen reader changes tone when reading this) # bold in CSS (only style, no important meaning)
- em: <em> </em> makes the text italic, semantically places emphasis on the text, # italic in CSS
- nesting and indentation: nesting elements = parents, nesting elements = children, elements at same level of nesting = siblings
- comment: <!-- -->
- Lorem ipsum: dummy text as placeholder text for previewing layouts and visual mockups  

## List
- ordered: <ol> </ol>
- unordered: <ul> </ul>
- items in list: <li> </li>

## Link and image
- link: <a href="#"> </a> (anchor element)
  + absolute links: link to pages on other websites: protocol://domain/path. An absolute link will always contain the protocol and domain of the destination.
  eg: https://www.theodinproject.com/about
  + relative links: link to other pages in our own website, do not include the domain name, only include the file path to the other page, relative to the page you are creating the link on
  eg: pages/about.html
    * notes: index.html is usually at the root folder/directory, then all other html files are in their own directory

- image: <img src="#"> (img element, no closing tag)
  + srs is simlar to href in link
  + go up to the root directory: ../
    eg: ../images/dog.jpg => go to the root directory, then to images, then access dog.jpg
  + alt attribute: used for screen reader, or when the image cannot be loaded
    eg: alt="black dog in grey sweater"
