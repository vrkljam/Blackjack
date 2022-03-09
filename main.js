//*************Variable Section */

const suits= ['Hearts', 'Spades', 'Clubs', 'Diamonds']
const cardValues= ['Ace', 2, 3, 4, 5, 6, 7, 8,9, 10, 'Jack', 'Queen', 'King',]
const newDeck =[]
let cardTotal = 0
let playerTotal=0
let dealerTotal=0
let cardArea = document.querySelector('#cardArea')
// let cardCheck = document.querySelector('.cardCheck')
// let cardSpot =document.querySelector('.cardSpot')
let dealerCards =document.querySelector('#dealerCards');
let playerCards = document.querySelector('#playerCards');
let dealerDraw =document.querySelector('#dealerDraw');
let playerDraw =document.querySelector('#playerDraw');



//********A Deck of cards */
//make a deck of cards

function makeDeckOfCards (){
    for (let i=0; i<suits.length; i++){
        for(let j=0; j<cardValues.length; j++){
            let theCard = (`${cardValues[j]} ${suits[i]}`)
            newDeck.push(theCard)
            }
        }
    }
makeDeckOfCards()

//pick a random card and prevent it from being selected again

function dealerRandomCard (e){
    // for (let i=0; i<4; i++){
        e.target.preventDefault
        let cardIndex = Math.floor(Math.random()*52);
        let dealtCard = newDeck[cardIndex]
        let li = document.createElement ('li')
        dealerCards.appendChild(li)
        li.textContent =dealtCard
            // }
        }

        function playerRandomCard (e){
//     for (let i=0; i<4; i++){
    e.target.preventDefault
        let cardIndex = Math.floor(Math.random()*52);
        let dealtCard = newDeck[cardIndex]
        let li = document.createElement ('li')
        playerCards.appendChild(li)
        li.textContent =dealtCard
}




//dealtCard appendChild (body?)
//need to prevent random card from being selected again
// if (newDeck[card]===)

dealerDraw.addEventListener('click',dealerRandomCard)
playerDraw.addEventListener('click',playerRandomCard)




function dealInit (){
    //deal one card to player and one card to dealer *2
    //player cards shown
    //dealer card one shown 2nd hidden
}
// MMMMMM.addEventListener('click', cardDeal)


//********************Adding Cards */
//add the cards together
//numbers are numbers, 
// function addCards(){
    //     playerTotal = card1 + card2 + card(n)   
        //     if card=jack-queen-king then number =10 
        //      if card =ace then number=1 or 11
    // }
//   cardTotal=playerCard(1)+playerCard(2)
// function dealerAddCards(){
//     playerTotal = card1 + card2 + card(n)   
        //     if card=substring()='jack-queen-king' then number =10 
        //      if card =substring()==='ace' then number=1 or 11

// }

//OR
// one function to add cards and that function called by 
    //player function or dealer function 
//************************** */

//how to deal cards one at a time to opposite players
//need input boxes for card destination 
    //appendChild for cards
    //start with two input boxes for each player
    //

// for (let i=0; i<5;i++){
// let cardSpot= document.getElementById('cardSpot')
// let li = document.createElement ('li')
// cardSpot.appendChild(li)
// li.appendChild(dealtCard)

// }

//if player addeventlistern hit then appendchild with another random card