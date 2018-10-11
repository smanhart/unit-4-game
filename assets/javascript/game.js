//Variables
var targetNum = 0;
var crystalNum = [];
var winCounter = 0;
var lossCounter = 0;
var userTotal = 0;
var crystalPics = ["Crys_1.jpg", "Crys_2.jpg", "Crys_3.jpg", "Crys_4.jpg"]




//Functions

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


//generate random crystal pic
//for loop to make a crystal for each number in array
for (var i = 0; i < crystalNum.length; i++) {
    
        var randomCrystal = (Math.floor(Math.random()*crystalPics.length)+1);
        // $("#crystals").html("<img src='assets/images/Crys_" + randomCrystal + ".jpg'")
        console.log(randomCrystal);
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


//Process

//create onclick event for crystals
$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystavalue"))
    console.log(this);
});




//pull assigned number data
//turn string data into an integer
//add crystal value to user total
//check user total to target num
    //if equal, you win
        //reset game
    //if over, you lose
        //reset game