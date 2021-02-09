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
const keepCards = [];
const discardCards = [];

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

// Gets a random value from usedCards and assigns it to card 1, then removes it from the usedCards array.
// Repeats the same for card 2
const randomCards = () => {
    let cardOneContent = usedCards[Math.floor(Math.random() * usedCards.length)];
    cardOne.innerHTML = cardOneContent;
    usedCards = removeCard(usedCards, cardOneContent);
    
    let cardTwoContent = usedCards[Math.floor(Math.random() * usedCards.length)];
    cardTwo.innerHTML = cardTwoContent;
    usedCards = removeCard(usedCards, cardTwoContent);
}

// Calls the randomCards function on page load
randomCards();