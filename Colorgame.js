var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var mode = document.querySelectorAll(".mode");

for(var i=0; i< mode.length; i++){
	mode[i].addEventListener("click", function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
		reset();
	});
}

function reset(){
	colors=generateRandomColors(numSquare);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
		squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}	
	}	
	h1.style.background = "steelBlue";
}

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor == pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}
		else{	
			this.style.background="#232323";
			messageDisplay.textContent= "Try Again!!"
		}
	});
}

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr= [];
	for (var i = 0; i < num; i++) {
	arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}