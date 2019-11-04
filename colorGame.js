// variable to keep track of how many squares (initial 6)
var numSquares = 6;
//creates an array of 6 random colors
var colors = generateRandomColors(numSquares);
//pick a random color from the array
var pickedColor = pickColor();

// SELECTORS
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

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
easyBtn.addEventListener("click", function(){
    // add classList .selected
    easyBtn.classList.add("selected");
    // removes classList .selected
    hardBtn.classList.remove("selected");
    // sets numSquares to 3
    numSquares = 3;
    // generate 3 new colors array for easy mode
    colors = generateRandomColors(numSquares);
    // sets new pickedColor
    pickedColor = pickColor();
    // changes the colorDisplay text for new pickedColor
    colorDisplay.textContent = pickedColor;
    // loops to set 3 new colors to squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            // change each color to match given color
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        } 
    }

    // reset the h1 background color to default #232323
    h1.style.backgroundColor = "#232323";

    // reset messageDisplay
    messageDisplay.textContent = "";

    // reset resetButton to "new Colors"
    resetButton.textContent = "New Colors";

});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    // sets numSquares to 6
    numSquares = 6;
    // generate 6 new colors array for hard mode
    colors = generateRandomColors(numSquares);
    // sets new pickedColor
    pickedColor = pickColor();
    // changes the colorDisplay text for new pickedColor
    colorDisplay.textContent = pickedColor;
    // loops to set 6 new colors to squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

    // reset the h1 background color to default #232323
    h1.style.backgroundColor = "#232323";

    // reset messageDisplay
    messageDisplay.textContent = "";

    // reset resetButton to "new Colors"
    resetButton.textContent = "New Colors";

});



resetButton.addEventListener("click", function(){
    // generate all new random colors
    colors = generateRandomColors(numSquares);

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

    // reset messageDisplay
    messageDisplay.textContent = "";

    // reset resetButton to "new Colors"
    resetButton.textContent = "New Colors";
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