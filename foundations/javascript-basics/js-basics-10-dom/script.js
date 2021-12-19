const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const p = document.createElement('div');
p.textContent = "Hey, I'm red";
p.style.color = 'red';
container.appendChild(p);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
const h1Child = document.createElement('div');
h1Child.textContent = "I'm in a div";
div.appendChild(h1Child);
const pChild = document.createElement('div');
pChild.textContent = 'ME TOO';
div.appendChild(pChild);
container.appendChild(div);

function alertFunc() {
  alert("YAY! You did it!");
}

btn.addEventListener('click', alertFunc);   // alert box "YAY! You did it!"

btn.addEventListener('click', function(e) { // console.log the click event = PointerEvent
  console.log(e);
});

btn.addEventListener('click', function(e) { // target = info about the event's target = the DOM node clicked
  console.log(e.target);                    // <button id="btn">Click Me</button>
});

btn.addEventListener('click', function(e) { // change background color of the DOM node clicked => clicked -> yellow
  e.target.style.backgroundColor = 'yellow';
});
