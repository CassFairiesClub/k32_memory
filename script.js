
const cards = document.getElementsByClassName('card'); 
let allImages = document.getElementsByClassName('card-image'); 
let movesDisplay = document.querySelector('.move-counter'); 
let toggledCardsArray = []; 
let move = 0; 
let winCount = 0; 
const restart = document.getElementById('restart'); 
  
const imagesLinkArray = [ 
    {id: 1,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_screen_relaxed.png',},
    {id: 2,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_screen_relaxed.png',},
    {id: 3,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_closed.png',},
    {id: 4,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_closed.png',},
    {id: 5,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/smile_blue_relaxed.png',},
    {id: 6,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/smile_blue_relaxed.png',},
    {id: 7,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_screen.png',},
    {id: 8,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_screen.png',},
    {id: 9,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_yellow_relaxed.png',},
    {id: 10,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_yellow_relaxed.png',},
    {id: 11,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/smile_yellow_relaxed.png',},
    {id: 12,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/smile_yellow_relaxed.png',},
    {id: 13,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/sad_red.png',},
    {id: 14,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/sad_red.png',},
    {id: 15,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_blue_relaxed.png',},
    {id: 16,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_blue_relaxed.png',},
    {id: 17,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/smile_blue.png',},
    {id: 18,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/smile_blue.png',},
    {id: 19,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_closed.png',},
    {id: 20,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jagged_closed.png',},
    {id: 21,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_blue_relaxed.png',},
    {id: 22,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_blue_relaxed.png',},
    {id: 23,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_red.png',},
    {id: 24,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_red.png',},
    {id: 25,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_screen.png',},
    {id: 26,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_screen.png',},
    {id: 27,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_yellow.png',},
    {id: 28,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_yellow.png',},
    {id: 29,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/sad_green.png',},
    {id: 30,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/sad_green.png',},
    {id: 31,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_blue_relaxed.png',},
    {id: 32,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_blue_relaxed.png',},
    {id: 33,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jade.png',},
    {id: 34,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/jade.png',},
    {id: 35,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_yellow.png',},
    {id: 36,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_yellow.png',},
    {id: 37,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_screen.png',},
    {id: 38,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_screen.png',},
    {id: 39,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_red.png',},
    {id: 40,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/intercom_red.png',},
    {id: 41,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_green.png',},
    {id: 42,image:'https://bafybeiawsl4s2jpwerir6qcdxzyhybmmnr3kb7b2w6vup5cwu3rzeglslu.ipfs.nftstorage.link/img/happy_green.png',}
] 
  
// function to restart the game 
const restartGame = () => { 
    let toggledCard = document.getElementsByClassName('card toggled'); 
    imagesLinkArray.sort(() => Math.random() - 0.5); 
    Object.values(toggledCard).forEach(function (el) { 
        setTimeout(() => { 
            el.classList.remove("toggled"); 
        }, 0); 
    }) 
    toggledCardsArray.length = 0; 
    move = 0; 
    winCount=0; 
    movesDisplay.innerText = `Moves: ${move}`; 
    let allImagesSrc = document.getElementsByClassName('card-image'); 
    Object.values(allImagesSrc).forEach((el, index)=>{ 
        el.src = imagesLinkArray[index].image; 
        el.alt = imagesLinkArray[index].newAlt; 
        el.id = imagesLinkArray[index].id 
    })  
} 
restart.addEventListener('click', restartGame); 

//checking for the last clicked and current  
//clicked cards and applying changes accordingly 
for (var i = 0; i < cards.length; i++) { 
    cards[i].addEventListener('click', function () { 
        this.classList.add("toggled"); 
        toggledCardsArray.push(this); 
        let thisImgSrc = this.querySelector('.card-image').src; 
        let previousImgSrc = toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src; 
        if(thisImgSrc !== previousImgSrc) { 
            toggledCardsArray.forEach(function (el) { 
                setTimeout(() => { 
                    el.classList.remove("toggled"); 
                }, 500); 
            }) 
            toggledCardsArray.length = 0; 
            move++; 
        } 
        else{ 
            toggledCardsArray.length = 0; 
            move++; 
            winCount++; 
        } 
        movesDisplay.innerText = `Moves: ${move}`; 
        if(winCount===21){ 
            setTimeout(()=>{ 
                alert(`HONK!!! You won the game in ${move} moves.`) 
            }, 300) 
        } 
    }) 
}
