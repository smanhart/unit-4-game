//Variables
var targetNum = 0;
var crystalNum = [];
var winCounter = 0;
var lossCounter = 0;
var userTotal = 0;




//Functions

//generate random target number
function getRandomNum(min, max) {
    targetNum = Math.floor(Math.random() * (max - min)) + min;
}
 //print to screen
// $("#numToGuess").text(targetNum);

   


//generate random number for crytals

    function getCrytalNum(min, max) {
        for(var i=0; i<4; i++) {
        var singleCrys = Math.floor(Math.random() * (max - min)) + min;
        crystalNum.push(singleCrys);
        }
    }

getCrytalNum(1,12);
console.log(crystalNum);
    //for loop to get four numbers
    //push numbers to array for holding

//generate random crystal pic
    //for loop to make a crystal for each number in array
    //assign class
    //assign number to crystal with data-
    //print to screen



//Process

//create onclick event for crystals


getRandomNum(19,120)
console.log(targetNum);
//pull assigned number data
//turn string data into an integer
//add crystal value to user total
//check user total to target num
    //if equal, you win
        //reset game
    //if over, you lose
        //reset game