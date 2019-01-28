const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" }
];

const view = {

  score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  // This function grabs the element and replacec its
  // content and attributes according to new values passed.
  render( target, content, attributes) {
    for( const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  }

};

const game = {

  start( quiz ) {
    this.questions = [...quiz];
    this.score = 0; // initialize score
  
    // Iterating over questions, main game loop
    for ( const question of this.questions ) {
      this.question = question;
      this.ask();
    } // END of the main game loop 

    this.gameOver();
  },

  ask() {
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
  },

  check( response ) {
    const answer = this.question.realName;
    if ( response === answer ) {
      view.render( view.result, 'Correct!', { 'class': 'correct' } );
      alert( 'Correct!' );
      this.score++;
      view.render( view.score, this.score );
    } else {
      view.render( view.result, `Wrong! The correct answer was ${answer}.`, { 'class': 'wrong' } );
      alert( `Wrong! The correct answer was ${answer}.` );
    }
  },

  gameOver() {
    view.render( view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}.` );
  }
}

// Staring the game.
game.start( quiz );
