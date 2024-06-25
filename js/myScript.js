var memoryPic = [
    "./pics/card1.png",
    "./pics/card2.png",
    "./pics/card3.png",
    "./pics/card4.png",
    "./pics/card5.png",
    "./pics/card6.png",
    "./pics/card7.png",
    "./pics/card8.png",
    "./pics/card1.png",
    "./pics/card2.png",
    "./pics/card3.png",
    "./pics/card4.png",
    "./pics/card5.png",
    "./pics/card6.png",
    "./pics/card7.png",
    "./pics/card8.png",
];

var flippedCards = [];

var winCount = 0;

shuffleArray(memoryPic);

/*function and use of function to display players name------------------------------------------------------------------------------------*/
function enterName() {
    var playerName = prompt("Please enter your name:");

    if(playerName != 0) {
        document.getElementById('playername').innerHTML = playerName;
    }
}

enterName();


/*function to display seconds--------------------------------------------------------------------------------------------------------------*/
var seconds = 0;

function countSeconds() 
{
    seconds++;
    document.getElementById('seconds').innerHTML = seconds;
}

var intervalSeconds = setInterval(countSeconds, 1000);


/*display trys-----------------------------------------------------------------------------------------------------------------------------*/
var trys = 0;

document.getElementById('trys').innerHTML = trys;


/*flip the cards---------------------------------------------------------------------------------------------------------------------------*/
function flipCard(cardId) 
{
    var clickedCard = document.getElementById(cardId);
    var cardIndex = parseInt(cardId.substring(4)) - 1;

    if (!clickedCard.dataset.flipped) {
        clickedCard.querySelector('img').src = memoryPic[cardIndex];
        flippedCards.push(clickedCard);
    }

    if (flippedCards.length == 2) {
        setTimeout(compareCards, 700);
    }
}


function compareCards() 
{
    //check if same images were choosen
    if (flippedCards[0].querySelector('img').src == flippedCards[1].querySelector('img').src) {
        flippedCards[0].querySelector('img').src = "./pics/memoryBgI.png"
        flippedCards[1].querySelector('img').src = "./pics/memoryBgI.png"
        flippedCards[0].dataset.flipped = true;
        flippedCards[1].dataset.flipped = true;
        winCount++;
    } else {
        //flip back if not
        flippedCards[0].querySelector('img').src = "./pics/memoryBg.png";
        flippedCards[1].querySelector('img').src = "./pics/memoryBg.png";
        }
    trys++;
    document.getElementById('trys').innerHTML = trys;
    flippedCards = [];

    if(winCount == 8){
        clearInterval(intervalSeconds);
    }
};


function shuffleArray(array) 
{
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}