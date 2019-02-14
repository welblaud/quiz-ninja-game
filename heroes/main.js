'use-strict';

const form = document.forms['hero'];
form.addEventListener( 'submit', makeHero, false );
form.addEventListener( 'submit', validate, false );

const label = form.querySelector( 'label' );
const error = document.createElement( 'div' );
error.classList.add( 'error' );
error.textContent = '! Your name is not allowed to start with X/x.';
label.append( error );
form.heroName.addEventListener( 'change', validateInline, false );
form.heroName.addEventListener( 'keyup', disableSubmit, false );

function makeHero(event) {

  event.preventDefault(); // prevent the form from being submitted

  const hero = {}; // create an empty object, like new Object()

  hero.name = form.heroName.value; // create a name property based on the input field's value
  hero.realName = form.realName.value; // secret name taken from the password input field
  hero.powers = [];
  /*
  for (let i = 0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
      hero.powers.push(form.powers[i].value);
    }
  }
  */
  // refactored!
  hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
  hero.category = form.category.value;
  hero.age = form.age.value;
  hero.city = form.city.value;
  hero.origin = form.origin.value;

  alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
  return hero;
}

function validate(event) {

  const firstletter = form.heroName.value[0];
  if ( firstletter.toUpperCase() == 'X' ) { // both x and X are catched this way
    event.preventDefault();
    alert( 'Your name is not allowed to start with X!' );
  }

}

function validateInline() {

  const heroName = this.value.toUpperCase();
  if ( heroName.startsWith( 'X' ) ) {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }

}

function disableSubmit(event) {

  if ( event.target.value === '' ) {
    document.getElementById( 'submit' ).disabled = true;
  } else {
    document.getElementById( 'submit' ).disabled = false;
  }

}

