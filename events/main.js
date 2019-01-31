'use-strict';

function doSomething(event) {
  console.log('Something Happened!');
  console.log(event.type);
  console.log(event.target);
  console.log(`screen: (${event.screenX}, ${event.screenY}), page: (${event.pageX}, ${event.pageY}), client: (${event.clientX}, ${event.clientY})`);
}

function highlight(event) {
  event.target.classList.toggle('highlight');
}
function highlightBlue(event) {
  event.target.classList.toggle('highlightBlue');
}
const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click') );
clickParagraph.addEventListener('mousedown', () => console.log('down') );
clickParagraph.addEventListener('mouseup', () => console.log('up') );

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', highlight);

const keyParagraph = document.getElementById('key'); // Does not work? It probably needs to focus!
// These are for the global window object.
// addEventListener('keydown', (event) => [highlight, console.log(event.key)]); // <-- returning two values!
//addEventListener('keyup', highlightBlue);
//addEventListener('keypress', (event) => console.log(`You stopped pressing the key ${event.key} on ${new Date}`));
addEventListener('keydown', (event) => {
  if (event.key === 'c' && event.ctrlKey) { // Did the user presses ctrl + c?
    console.log('Action canceled!');
    }
}); // <-- returning two values!
