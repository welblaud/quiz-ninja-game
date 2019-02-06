'use-strict';

const form = document.forms[0];
const input = form.elements.searchInput;
input.addEventListener( 'focus', () => console.log('focused') );
input.addEventListener( 'blur', () => console.log('blurred') );
input.addEventListener( 'change', () => console.log('changed') );

form.addEventListener( 'submit', search, false );
function search(event) {
  alert( `You Searched for: ${input.value}` );
  event.preventDefault();
}
