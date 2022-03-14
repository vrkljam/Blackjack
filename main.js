//*************Variable Section */

const suits= ['♥︎', '♠︎', '♣︎', '♦︎']
const cardValues= ['Ace', 2, 3, 4, 5, 6, 7, 8,9, 10, 'Jack', 'Queen', 'King',]
const newDeck =[]
let dealtCard=[];
let king =10
let queen = 10
let jack =10
let cardArea = document.querySelector('#cardArea')
// let cardCheck = document.querySelector('.cardCheck')
let startBtn = document.querySelector('#startBtn')
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
let dealerTotal  =[];
let playerTotal  =[];
let playerCardTotal=0
let dealerCardTotal=0
let playAgain =document.querySelector('#playAgain')
let oneBtn = document.querySelector('#one');
let elevenBtn= document.querySelector('#eleven')
let shownCard = document.querySelector('.shownCard')
let dScore= document.querySelector('#dScore')
let pScore= document.querySelector('#pScore')



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

//pick a random card and prevent it from being selected again--DONE!!
let tempHand  =[] 
let counter =0  

function randCard(){
    let cardIndex = Math.floor(Math.random()*52);
        dealtCard= newDeck[cardIndex]
        console.log (dealtCard)
    const isCard = tempHand.includes(dealtCard)
    if (isCard ===true){
        randCard()
        } 
    tempHand.push(dealtCard);
    counter++
    if (counter===52){
         alert ('shuffling new deck')
            tempHand =[]
            counter=0
    }
}


function dealInit (){
    playerHand(); 
    setTimeout(dealerHand, 500);
    setTimeout(playerHand, 1000);
    setTimeout(dealerHand, 1500);
}

function playReset (){
    // based on info from stack overflow
 
        document.querySelectorAll( '.cardBoxDealer').forEach(items=>items.remove());
        document.querySelectorAll( '.cardBoxPlayer').forEach(items=>items.remove());
        startBtn.classList.remove('grayLetters');
        startBtn.disabled=false;
        pHit.disabled=true;
        dHit.disabled=true;
        dealerCardTotal=0;
        dCardTotal.value='';
        playerCardTotal=0;
        pCardTotal.value='';
    }
    
function dealerHand (){
    randCard()
        
    let div1 = document.createElement ('div');
        dealerCards.appendChild(div1);
        div1.textContent =dealtCard;
        div1.classList.add('cardBoxDealer');
        div1.classList.add('shownCard');

    let changCardToInt = dealtCard.split(" ",1);
    
    if (changCardToInt[0]==='Jack'||changCardToInt[0]==='Queen'||changCardToInt[0]==='King'){
        dealerTotal.push(10);
    }  else if (changCardToInt[0]==='Ace'){
        dAceValue();
    } else {
        dealerTotal.push(Number(changCardToInt));
    }
    
    dHit.disabled=false;
    for (let i=0; i<dealerTotal.length; i++){
        dealerCardTotal +=Number(dealerTotal[i])
        dCardTotal.value=dealerCardTotal 
        dealerTotal=[]
    }
    
    if (dealerCardTotal>=17 || dealerCardTotal>=22){
        dHit.disabled=true
    }
    if (dealerCardTotal===21){
        winner()
    }  

    checkStatus()
}
        
function playerHand (){
        oneBtn.disabled=true;
    elevenBtn.disabled=true;
    randCard()

    
    let div = document.createElement ('div')
        playerCards.appendChild(div)
        div.textContent =dealtCard
        div.classList.add('cardBoxPlayer')
    
    let changCardToInt = dealtCard.split(" ",1)

    if (changCardToInt[0]==='Ace'){
        pAceValue();}

    if (changCardToInt[0]==='Jack'||changCardToInt[0]==='Queen'||changCardToInt[0]==='King'){
        playerTotal.push(10)
    } else {
        playerTotal.push(Number(changCardToInt))
    }
    
    for (let i=0; i<playerTotal.length; i++){
            playerCardTotal +=Number(playerTotal[i])
            pCardTotal.value=playerCardTotal 
            playerTotal=[]
        }

    if (playerCardTotal>=22){
        pHit.disabled=true;
        dHit.disabled=true;
        }
    
    pHit.disabled=false;

    checkStatus()
    }

function checkStatus (){
    if (pHit.disabled===true && dHit.disabled===true){
    compareScore() 
    }   
}

function dAceValue(){
    if (dealerCardTotal===0 ||dealerCardTotal===10) {
        dealerTotal.push(11); console.log('dct1',dealerCardTotal);
    } else if (dealerCardTotal===6 || dealerCardTotal===7|| dealerCardTotal===8 || dealerCardTotal===9){
        dealerTotal.push(11)
    } else if (dealerCardTotal ===11){
        dealerTotal.push(1); console.log('is this activated?');console.log('dct2',dealerCardTotal)
    } else {
        dealerTotal.push(1);
    }
    } 

function pAceValue(){
        console.log ('checking aces')
        oneBtn.disabled=false;
          elevenBtn.disabled=false;
        if (playerCardTotal===0 ||playerCardTotal===10){
            playerTotal.push(11);
        } else {
            playerTotal.push(1);
        } 
}   

function winner(){
    // look up how to pop up a text box indicating winner
        alert('Winner Dealer'   )
        if (dealerCardTotal!==playerCardTotal){
            dScore.value ++;
        } else {
            alert('its a tie')
        }
    
    }

    
function compareScore (){
console.log("compareScore")
           if (dScore.value===10 || pScore.value===10){
            alert ('Winner!')
            playReset()
        }
        if (playerCardTotal >=22){
            return dScore.value ++
        } else if (dealerCardTotal >=22){
            return pScore.value ++
        } 
        if (dealerCardTotal<21 && playerCardTotal <21){
            if (dealerCardTotal > playerCardTotal){
            return  dScore.value ++
            }
        } 
        if (dealerCardTotal<21 && playerCardTotal<21){
            if (playerCardTotal > dealerCardTotal){
                return pScore.value ++
            }
        } 
        if (playerCardTotal===21 && dealerCardTotal<21){
            return pScore.value ++
        } 
        if (playerCardTotal>=22 && playerCardTotal<21){
            return  dScore.value ++
        }
         if (dealerCardTotal===playerCardTotal){
            alert ('tie')
        }
     
        console.log('end of this')
}

function winScore(){

}

//disabled based from stackoverflow/thewebdev
startBtn.addEventListener('click', ()=> {
    dealInit(); 
    startBtn.disabled=true})

//stack overflow and tutorials point for "set timeout" help
dHit.addEventListener('click',dealerHand)
pHit.addEventListener('click',playerHand)

playAgain.addEventListener('click', playReset)

//switched to disabled
pHold.addEventListener('click', ()=> {pHit.disabled=true; checkStatus()})

//one and elven buttons
oneBtn.addEventListener('click',()=> {Number(playerCardTotal-=10);pCardTotal.value=playerCardTotal;console.log (playerCardTotal)})
//e=> playercardtotal ++
    
elevenBtn.addEventListener('click', ()=> {Number(playerCardTotal+=10); pCardTotal.value=playerCardTotal; console.log (playerCardTotal)})

console.log(oneBtn);
console.log(elevenBtn)

//********************Adding Cards */

//need to get Ace figured out 
//************************** */
