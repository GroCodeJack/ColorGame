var numofsquares = 6;
var colors = generateRandomColors(numofsquares);

var squares = document.querySelectorAll(".square");
var correctcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var headercolor = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

var isEasy = false;
var isHard = false;

colorDisplay.textContent = correctcolor;

for(var i = 0; i < squares.length; i++){
squares[i].style.backgroundColor = colors[i];
squares[i].style.borderRadius = "25px";
squares[i].addEventListener("click", function(){
var clickedColor = (this.style.backgroundColor);
if(clickedColor === correctcolor){
messageDisplay.textContent = "Correct!";
changeColors(clickedColor);
resetButton.innerText = "Play Again";
} else {
this.style.backgroundColor = "#232323";
messageDisplay.textContent = "Try Again";
}
});
}

easyButton.addEventListener("click", function(){
numofsquares = 3;
easyButton.classList.add("selected");
hardButton.classList.remove("selected");
colors = generateRandomColors(numofsquares);
correctcolor = pickColor();
colorDisplay.textContent = correctcolor;
for(var i = 0; i < squares.length; i++){
if(colors[i]){
squares[i].style.backgroundColor = colors[i];
} else {
squares[i].style.display = "none";
}
}
})

hardButton.addEventListener("click", function(){
numofsquares = 6;
hardButton.classList.add("selected");
easyButton.classList.remove("selected");
colors = generateRandomColors(numofsquares);
correctcolor = pickColor();
colorDisplay.textContent = correctcolor;
for(var i = 0; i < squares.length; i++){
squares[i].style.backgroundColor = colors[i];
squares[i].style.display = "block";
}
})

resetButton.addEventListener("click", function(){
resetButton.innerText = "New Colors";
colors = generateRandomColors(numofsquares);
correctcolor = pickColor();
colorDisplay.textContent = correctcolor;
for(var i = 0; i < squares.length; i++){
squares[i].style.backgroundColor = colors[i];
}
headercolor.style.backgroundColor = "steelblue";
messageDisplay.textContent = "";
})

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = color;
  }
  headercolor.style.backgroundColor = color;
 }

 function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
 }

 function generateRandomColors(num){
  var rando = [];
  for(var i = 0; i < num; i++){
  rando.push(randomColor());
  }
  return rando;
 }

 function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
 }