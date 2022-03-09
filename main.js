//*************Variable Section */

const suits= ['Hearts', 'Spades', 'Clubs', 'Diamonds']
const cardValues= ['Ace', 2, 3, 4, 5, 6, 7, 8,9, 10, 'Jack', 'Queen', 'King',]
const newDeck =[]
let dealtCard;
let king =10
let queen = 10
let jack =10
let ace = 1 || 11
let cardArea = document.querySelector('#cardArea')
// let cardCheck = document.querySelector('.cardCheck')
let dealerCards =document.querySelector('#dealerCards');
let playerCards = document.querySelector('#playerCards');
let dealerDraw =document.querySelector('#dealerDraw');
let playerDraw =document.querySelector('#playerDraw');
let dCardTotal= document.querySelector('#dCardTotal')
let pCardTotal= document.querySelector('#pCardTotal')
// let cardTotal = 0
let playerCardTotal=0
let dealerCardTotal=0


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

function randCard(){
        let cardIndex = Math.floor(Math.random()*52);
         dealtCard= newDeck[cardIndex]
        }

   let dealerTotal  =[];
function dealerRandomCard (e){
    e.target.preventDefault
        randCard()
        let li = document.createElement ('li')
        dealerCards.appendChild(li)
        li.textContent =dealtCard
    //should i remove selected card from array here?
    // newDeck.filter(d => d!==dealtCard)
    //need to make string value a integer and add all cards selected
    //card selected w/click needs to be split and first part put into an array to be added later
    //********lines 55-61 need to be redone b/c it's making an array of arrays */
    let test = dealtCard.split(" ",1)
    dealerTotal.push(test)
    console.log(test)
    console.log(dealerTotal)
        for (let i=0;i<dealerTotal.length;i++){
            dealerCardTotal +=dealerTotal
            dCardTotal.innerText=dealerCardTotal.value
        }
}


function playerRandomCard (e){
        e.target.preventDefault
        randCard()
        let li = document.createElement ('li')
        playerCards.appendChild(li)
        li.textContent =dealtCard
        }


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

// let card1 = dealtCard[0]
// let card2 = dealtCard[1]

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


//if player/dealer addeventlistern hit then appendchild with another random card
//if player/dealer addeventlistern hold then next turn

//*******look up tictactoe for how to do turns */
