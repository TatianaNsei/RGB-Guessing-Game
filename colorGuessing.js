var colors = [
    "rgb(255, 0, 0)",
    "rgb(109, 45, 0)",
    "rgb(0, 245, 98)",
    "rgb(0, 29, 100)",
    "rgb(125, 0, 135)",
    "rgb(120, 10, 255)",
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //ADD INTITIAL COLORS TO SQUARE
    squares[i].style.backgroundColor = colors[i];

    //ADD QUICK LISTENER TO SQUARE
    squares[i].addEventListener("click", function () {
        //GRAB THE COLOR OF A PARTICULAR SQUARE
        var clickedColor = this.style.background;
        if (pickedColor === clickedColor) {
            alert("Correct!");
        } else {
            alert("Try Again");
        }
    })
}