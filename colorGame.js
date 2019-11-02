//creates an array of 6 random colors
var colors = generateRandomColors(6);
//pick a random color from the array
var pickedColor = pickColor();

// SELECTORS
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

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

// EVENTS
resetButton.addEventListener("click", function(){
    // generate all new random colors
    colors = generateRandomColors(6);

    // pick a new random color from array
    pickedColor = pickColor();

    // sets new colorDisplay based on new picked color
    colorDisplay.textContent = pickedColor;

    // loop to change the colors of the square again
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

    // reset the h1 background color to default #232323
    h1.style.backgroundColor = "#232323";

});

// FUNCTIONS
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
    for(var i = 0; i <= number; i++){
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