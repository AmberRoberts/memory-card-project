/*
 * Create a list that holds all of your cards
 */

const card = document.getElementsByClassName("card");
const allCards = Array.from(card);
// const allCards = ['fa-diamond','fa-diamond',
//               'fa-paper-plane-o','fa-paper-plane-o',
//               'fa-anchor','fa-anchor',
//               'fa-bolt','fa-bolt',
//               'fa-cube','fa-cube',
//               'fa-leaf','fa-leaf',
//               'fa-bicycle','fa-bicycle',
//               'fa-bomb','fa-bomb'];
let flippedCards = [];
const matchedCards = [];
let stars = document.getElementsByClassName("fa-star").children;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// credit Mike Wales project webinar
function createCard() {
  return '<li class="card" data-card=${card}><i class="fa ${card}" ></i></li>'
}

// let shuffledCards = shuffle(allCards);

function start() {
  let deck = document.querySelector(".deck");
  let fullDeck = shuffle(allCards).map(function(card) {
    // reset stars
    // reset timer
    // reset moves
    return createCard();
  });

  // deck.innerHTML = fullDeck.join('');
}

start();

/*
 // * set up the event listener for a card.

 If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 */

allCards.forEach(function(card) {
  // click on a card, make it flip
  card.addEventListener("click", function(flip) {

    // push flipped cards to array, add open, show classes to flipped cards
    console.log("clicky");
    if (flippedCards.length < 2) {
    flippedCards.push(card);
    card.classList.add("open", "show");
  }
    setTimeout(function() {
      // WHEN TWO CARDS ARE IN THE ARRAY...
      card.classList.remove("open", "show");
      flippedCards = []; // resets the flipped array
      console.log("time is up");
    }, 1500);
    addMove();
  });
});

/*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)

 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
*/

/*
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 */
let moveCount = 0;
const moves = document.querySelector(".moves");
moves.innerHTML = 0;

function addMove() {
  // increase moves
  moveCount++;
  moves.innerHTML = moveCount;
}

/*
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
function winning() {
  if (matchedCards.length === allCards.length) {
    // end game and open final score message box
  }
}

// restart

// function beginAgain() {
// shuffle cards
// clear timer
// clear arrays
// start game function
// }

let restart = document.querySelector(".restart");
restart.addEventListener("click", function(newGame) {
  console.log("clicked it");
  // beginAgain();
  // card.classList.remove('show', 'open'); DOES THIS BELONG HERE?
});

// Referenced live webinar walkthrough with Mike Wales, https://developer.mozilla.org and https://www.w3schools.com for functions and process.
