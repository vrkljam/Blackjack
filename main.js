//*************Variable Section */

const suits= ['♥︎', '♠︎', '♣︎', '♦︎']
const cardValues= ['Ace', 2, 3, 4, 5, 6, 7, 8,9, 10, 'Jack', 'Queen', 'King',]
const newDeck =[]
let dealtCard;
let king =10
let queen = 10
let jack =10
// let ace = 1 || 11
let cardArea = document.querySelector('#cardArea')
// let cardCheck = document.querySelector('.cardCheck')
let dealerCards =document.querySelector('#dealerCards');
let playerCards = document.querySelector('#playerCards');
let dHit = document.querySelector('#dHit')
let dHold = document.querySelector('#dHold')
let pHit = document.querySelector('#pHit')
let pHold = document.querySelector('#pHold')
let dealerDraw =document.querySelector('#dealerDraw');
let playerDraw =document.querySelector('#playerDraw');
let dCardTotal= document.querySelector('#dCardTotal')
let pCardTotal= document.querySelector('#pCardTotal')
// let cardTotal = 0
let dealerTotal  =[];
let playerTotal  =[];
let playerCardTotal=0
let dealerCardTotal=0
let playAgain =document.querySelector('#playAgain')
let one = document.querySelector('#one');
let eleven= document.querySelector('#eleven')


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

function dealInit (){
    playerHand ()
    setTimeout(dealerHand, 500)
    setTimeout(playerHand, 1000)
    setTimeout(dealerHand, 1500)
}

function dealerHand (){
    randCard()
    
    let div = document.createElement ('div')
    dealerCards.appendChild(div)
    div.textContent =dealtCard
    div.classList.add('cardBoxDealer')
    
    //should i remove selected card from array here?
    // newDeck.filter(d => d!==dealtCard)

    let changCardToInt = dealtCard.split(" ",1)
    
        if (changCardToInt[0]==='Jack'||changCardToInt[0]==='Queen'||changCardToInt[0]==='King'){
            dealerTotal.push(10)
        } else  {
            dealerTotal.push(Number(changCardToInt))}
        // if (changCardToInt[0]==='Ace'&& dealerCardTotal===10){
        //         dealerTotal.push(11)
        // } else if (changCardToInt[0]==='Ace'&& dealerCardTotal<10){

        // }
        //     //ask if want to be 1 or 11
        //     //if card total 10 or less then ask if they want 1 or 11
        //     //when hand has an ace they can change from 1 to 11
        // }
            console.log(dealerTotal)

        for (let i=0; i<dealerTotal.length; i++){
            dealerCardTotal +=Number(dealerTotal[i])
            dCardTotal.value=dealerCardTotal 
            console.log(dealerCardTotal)
            dealerTotal=[]
        }
        // if (dealerCardTotal<=16){
        //     dealerHand()
        // } else if (dealerCardTotal>=17 && dealerCardTotal<21){
        //     alert('im done')
        // }
    }
    
function playerHand (){
    randCard()
    let div = document.createElement ('div')
    playerCards.appendChild(div)
    div.textContent =dealtCard
    div.classList.add('cardBoxPlayer')

    let changCardToInt = dealtCard.split(" ",1)
    if (changCardToInt[0]==='Jack'||changCardToInt[0]==='Queen'||changCardToInt[0]==='King'){
        playerTotal.push(10)
        } else {
            playerTotal.push(Number(changCardToInt))}
            console.log(playerTotal)

    if (changCardToInt[0]==='Ace'){
                    if (playerCardTotal===0){
                        playerTotal.push(11);
                    } else if (playerCardTotal===10){
                        playerTotal.push(11);
                    }
            } 
        
       for (let i=0;i<playerTotal.length;i++){
            playerCardTotal +=Number(playerTotal[i])
            pCardTotal.value=playerCardTotal 
            console.log(playerCardTotal)
            playerTotal=[]

    if (playerCardTotal>=22){
                pHit.classList.add('grayLetters')
                pHit.removeEventListener('click',playerHand)
                }
    if (playerCardTotal===21){
        winner()
    }   
            // removeCard()
        }
    }

    function winner(){
        alert('Winner')
    }

// function removeCard() {
//         let x = newDeck.indexOf(dealtCard)
//         console.log(x)
//         removeCard =newDeck.splice(x,1)
//     }
        


//stack overflow and tutorials point for "settimeout" help
dHit.addEventListener('click',dealerHand)
pHit.addEventListener('click',playerHand)

//*****Need to fix this so it will only be available once for a new game */
playAgain.addEventListener('click', dealInit)

//remove eventlistener from mdn docs
pHold.addEventListener('click', function (){
            pHit.classList.add('grayLetters');
            pHit.removeEventListener('click',playerHand)})

//one and elven buttons
one.addEventListener('click', function (){playerCardTotal++})
eleven.addEventListener('click', function (){playerCardTotal+=11})


//May not need a dealer hold button
dHold.addEventListener('click', function (){
    dHit.classList.add('grayLetters');
    dHit.removeEventListener('click',dealerHand)})


//********************Adding Cards */

//need to get Ace figured out 
//************************** */

// let testAr = ['5 clubs', '9 hearts', 'ace spades']
// let removeItem= testAr[1]
// console.log(testAr)

// let updateAr = testAr.splice(removeItem,1)
// console.log(testAr)

    //  if (changCardToInt[0]==='Ace'&& dealerCardTotal===10){
    //             dealerTotal.push(11)
    //     } else if (changCardToInt[0]==='Ace'&& dealerCardTotal<10){
    //         //run aceQ function
    //     }

    //     function aceQ (one, eleven){
    //         if 
    //     }