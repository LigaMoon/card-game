// Data used for cards
const data = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
];

// Define global, universal variables
let usedCards = data;
let keepCards = [];
let discardCards = [];
let msg = document.querySelector('#msg');

// Define card 1 associated variables
const cardOne = document.querySelector('#card-one')
const cardOneBtn = document.querySelector('#card-one-btn')

// Define card 2 associated variables
const cardTwo = document.querySelector('#card-two')
const cardTwoBtn = document.querySelector('#card-two-btn')


// Removes specific value from an array
const removeCard = (arr, value) => { 
    return arr.filter( (e) => { 
        return e != value; 
    });
}

const newCardsOne = () => {
    let pickedCard;
    if ( keepCards.length > 2) {
        usedCards = keepCards;
        keepCards = [];
        randomCards();
    } else if ( keepCards.length === 2 ) {
        pickedCard = cardTwo.innerHTML;
        cardOneBtn.setAttribute('disabled', true);
        cardTwoBtn.setAttribute('disabled', true);
        return msg.innerHTML = `your picked card is ${pickedCard}`;
    } else {
        pickedCard = keepCards[0];
        cardOneBtn.setAttribute('disabled', true);
        cardTwoBtn.setAttribute('disabled', true);
        return msg.innerHTML = `your picked card is ${pickedCard}`;
    }
}

const newCardsTwo = () => {
    let pickedCard;
    if ( keepCards.length > 2) {
        usedCards = keepCards;
        keepCards = [];
        randomCards();
    } else if ( keepCards.length === 2 ) {
        pickedCard = cardOne.innerHTML;
        cardOneBtn.setAttribute('disabled', true);
        cardTwoBtn.setAttribute('disabled', true);
        return msg.innerHTML = `your picked card is ${pickedCard}`;
    } else {
        pickedCard = keepCards[0];
        cardOneBtn.setAttribute('disabled', true);
        cardTwoBtn.setAttribute('disabled', true);
        return msg.innerHTML = `your picked card is ${pickedCard}`;
    }
}

/*
Gets a random value from usedCards and assigns it to card 1, then removes it from the usedCards array.
Adds selected radnom cards to Keep array
*/
const randomCards = () => {
    let cardOneContent = usedCards[Math.floor(Math.random() * usedCards.length)];
    cardOne.innerHTML = cardOneContent;
    usedCards = removeCard(usedCards, cardOneContent);
    keepCards.push(cardOneContent);
    
    let cardTwoContent = usedCards[Math.floor(Math.random() * usedCards.length)];
    cardTwo.innerHTML = cardTwoContent;
    usedCards = removeCard(usedCards, cardTwoContent);
    keepCards.push(cardTwoContent);
}

// Same but for only card 1
const discardCardOne = () => {
    const discardCard = cardOne.innerHTML;
    keepCards = removeCard(keepCards, discardCard);
    discardCards.push(discardCard);
}

cardOneBtn.addEventListener('click', () => {

    if (usedCards.length === 1) {
        discardCardOne();
        keepCards.push(usedCards[0]);
        newCardsOne();
    } else if ( usedCards.length === 0 ) {
        discardCardOne();
        newCardsOne();
    } else {
        discardCardOne();
        randomCards();
    };
});

// Same but for only card 2
const discardCardTwo = () => {
    const discardCard = cardTwo.innerHTML;
    keepCards = removeCard(keepCards, discardCard);
    discardCards.push(discardCard);
}

cardTwoBtn.addEventListener('click', () => {

    if (usedCards.length === 1) {
        discardCardTwo();
        keepCards.push(usedCards[0]);
        newCardsTwo();
    } else if ( usedCards.length === 0 ) {
        discardCardTwo();
        newCardsTwo();
    } else {
        discardCardTwo();
        randomCards();
    };
});


// Calls the randomCards function on page load
randomCards();