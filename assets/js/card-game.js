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
const randomCardOne = () => {
    const discardCard = cardOne.innerHTML;
    keepCards = removeCard(keepCards, discardCard);
    discardCards.push(discardCard);

    let cardOneNewContent = usedCards[Math.floor(Math.random() * usedCards.length)];
    cardOne.innerHTML = cardOneNewContent;
    usedCards = removeCard(usedCards, cardOneNewContent);
    keepCards.push(cardOneNewContent);

    console.log(usedCards);
    console.log(keepCards);
    console.log(discardCards);
}

cardOneBtn.addEventListener('click', () => {
    if ( usedCards.length === 0 ) {
        return msg.innerHTML = 'END';
    } else {
        randomCardOne();
    };
});


// Same but for only card 2
const randomCardTwo = () => {
    const discardCard = cardTwo.innerHTML;
    keepCards = removeCard(keepCards, discardCard);
    discardCards.push(discardCard);

    let cardTwoNewContent = usedCards[Math.floor(Math.random() * usedCards.length)];
    cardTwo.innerHTML = cardTwoNewContent;
    usedCards = removeCard(usedCards, cardTwoNewContent);
    keepCards.push(cardTwoNewContent);

    console.log(usedCards);
    console.log(keepCards);
    console.log(discardCards);
}

cardTwoBtn.addEventListener('click', () => {
    if ( usedCards.length === 0 ) {
        return msg.innerHTML = 'END';
    } else {
        randomCardTwo();
    };
});


// Calls the randomCards function on page load
randomCards();