/* Applicant - Israel Okwuje
   Smart Pension take-home coding exercise */

//Create an array of suites
const suitArr = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');

function createCards() {
  const cards = [];
  // Create an array with objects containing the value and the suit of each card
  for (let j = 0; j < suitArr.length; j += 1){
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suitArr[j]
      };
      cards.push(cardObject);
    }  
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 35; //adjusted to make each card value visible
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });

  return cards;  //As an array to be shuffled upon the shuffle event
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  const btnWrapper =  document.querySelector('.btn-wrapper');

  //Create shuffle button
  const shuffle = document.createElement('button');
  shuffle.setAttribute('id', 'shuffle');
  shuffle.innerHTML = 'Shuffle';
  shuffle.classList.add('btn', 'btn-lg', 'btn-secondary');
  shuffle.style.marginLeft = '25px';
  btnWrapper.append(shuffle);
  shuffle.addEventListener('click', shuffleCards);

  //create Show/Hide button
  const showHide = document.createElement('button');
  showHide.setAttribute('id', 'show-hide');
  showHide.innerHTML = 'Show/Hide';
  showHide.classList.add('show','btn', 'btn-lg', 'btn-secondary');
  showHide.style.marginLeft = '25px';
  btnWrapper.append(showHide);
  showHide.addEventListener('click', hideOrShow);

  //create Magic button
  const magic = document.createElement('button');
  magic.setAttribute('id', 'magic');
  magic.innerHTML = 'Magic';
  magic.classList.add('btn', 'btn-lg', 'btn-secondary');
  magic.style.marginLeft = '25px';
  btnWrapper.append(magic);
  magic.addEventListener('click', magicReorder);
}


// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();

  //Remove start button
  const startBtn =  document.getElementById('start-game');
  startBtn.style.display = 'none';
}


//Function to hide or show cards
function hideOrShow (){
  cardsWrapper.classList.toggle('hidden'); 
}

//Function shuffle cards 
function shuffleCards (){
  const cards = createCards();
  
  //using the Durstenfeld shuffle algorithm
  for (let i = cards.length-1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let tempVar = cards[i];
    cards[i] = cards[j];
    cards[j] = tempVar;
  }

  // Append shuffled cards to the DOM 
  cards.forEach((card, i) => {
    const positionFromLeft = i * 35;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
 
}

//Function to magically reorder the cards
function magicReorder (){
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);


