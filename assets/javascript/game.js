//Variables
var targetNum = 0;
var crystalNum = [];
var winCounter = 0;
var lossCounter = 0;
var userTotal = 0;
var crystalPics = ["Crys_1.jpg", "Crys_2.jpg", "Crys_3.jpg", "Crys_4.jpg", "Crys_5.jpg", "Crys_6.jpg", "Crys_7.jpg", "Crys_8.jpg" ]




//Functions

function reset() {
    userTotal = 0;
    getRandomNum(19,120);
    $("#numToGuess").text(targetNum);
    crystalNum = [];
    getCrytalNum(1,12);
    $("#crysTotal").empty();
    $("#crystals").empty();
    generateCrystals();

}

//generate random target number
function getRandomNum(min, max) {
    targetNum = Math.floor(Math.random() * (max - min)) + min;
}
getRandomNum(19,120)
$("#numToGuess").text(targetNum);
console.log(targetNum);


//generate random number for crytals
function getCrytalNum(min, max) {
    //for loop to get four numbers
    for(var i=0; i<4; i++) {
    var singleCrys = Math.floor(Math.random() * (max - min)) + min;
    //push numbers to array for holding
    crystalNum.push(singleCrys);
    }
}
getCrytalNum(1,12);
console.log(crystalNum);

function generateCrystals() {
//generate random crystal pic
//for loop to make a crystal for each number in array
for (var i = 0; i < crystalNum.length; i++) {
    
        var randomCrystal = (Math.floor(Math.random()*crystalPics.length)+1);
        // $("#crystals").html("<img src='assets/images/Crys_" + randomCrystal + ".jpg'")
        var imageCrystal = $("<img>");
        //assign class
        imageCrystal.addClass("crystal-image");
        //add random crystal number to image source
        imageCrystal.attr("src", "assets/images/Crys_" + randomCrystal + ".jpg");
        //assign number to crystal with data-
        imageCrystal.attr("data-crystalvalue", crystalNum[i]);
         //print to screen
        $("#crystals").append(imageCrystal);
        
}
}
generateCrystals();



//Process

//create onclick event for crystals ASK FOR CLARIFICATION ABOUT THIS NESTED IN AN EVENT RATHER THAN OBJECT
$("#crystals").on("click", ".crystal-image", function() {
    //pull assigned number data
    var crystalValue = ($(this).attr("data-crystalvalue"));
    //turn string data into an integer
    crystalValue = parseInt(crystalValue);
    //add crystal value to user total
    userTotal += crystalValue;
    $("#crysTotal").text(userTotal);
    console.log(userTotal);

    //check user total to target num
    if(userTotal === targetNum) {
        winCounter++
        $("#wins").text(winCounter);
        alert("You've won!")
        reset();
    } 
    else if(userTotal > targetNum) {
        lossCounter++
        $("#losses").text(lossCounter);
        alert("What a shame, you've lost.")
        reset();
    }
    //if equal, you win
        //reset game
    //if over, you lose
        //reset game




});







