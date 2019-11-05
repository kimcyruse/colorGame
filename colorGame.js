// <------------------------------VARIABLES----------------------------------->
// variable to keep track of how many squares (initial 6)
var numSquares = 6;
//creates an array of 6 random colors
var colors = generateRandomColors(numSquares);
//pick a random color from the array
var pickedColor = pickColor();

// <------------------------------SELECTORS----------------------------------->
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// for Easy and Hard buttons
var modeButtons = document.querySelectorAll(".mode");

// <------------------------------EVENTS----------------------------------->

// loops through the modeButtons to set their eventListener
for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        // removes .seleceted - to make sure both buttons are not selected
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        // adds .selected if one of the button is selected
        this.classList.add("selected");
        // shorter way to set numSquares
        // if textContent is "Easy" numSquares is 3 else 6
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}

resetButton.addEventListener("click", function(){
    reset();
});

// sets the colorDisplay text to the pickedColor
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare cliked color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }else{
            messageDisplay.textContent = "Try Again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

// <------------------------------FUNCTIONS----------------------------------->

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number){
    // make an array
    var arr = [];

    // repeat num times
    for(var i = 0; i < number; i++){
        //get random color and push into array 
        arr.push(randomColor());
    }

    // return an array
    return arr;
}

function randomColor(){

    // Math.random() generates random number from 0 - 1 excluding 1
    // Math.floor round the number to the closest lesser value

    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}

// function that resets the game used by resetButton, modeButton[0], modeButton[1]
function reset(){
    // generate new colors
    colors = generateRandomColors(numSquares);
    // sets new pickedColor
    pickedColor = pickColor();
    // changes the colorDisplay text for new pickedColor
    colorDisplay.textContent = pickedColor;
    // loops to set new colors to squares
    for(var i = 0; i < squares.length; i++){
        // checks if theres color proceed
        if(colors[i]){
            // make sures the square is displayed
            squares[i].style.display = "block";
            // change each color to match given color
            squares[i].style.backgroundColor = colors[i];
        }else{
            // hides other squares if theres no color
            squares[i].style.display = "none";
        } 
    }

    // reset the h1 background color to default
    h1.style.backgroundColor = "steelblue";

    // reset messageDisplay
    messageDisplay.textContent = "";

    // reset resetButton to "new Colors"
    resetButton.textContent = "New Colors";

}