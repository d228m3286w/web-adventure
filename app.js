

//Adding a function to replace the winning cell with a picture of dead Abe Simpson
var killAbe = function () {
	document.getElementById(adventure.endY.toString() + adventure.endX.toString()).innerHTML = "<img src=\"dead.jpg\"></img>";
};

//Adding a function to place an image at the target cell
var target = function(){
	document.getElementById(adventure.endY.toString() + adventure.endX.toString()).innerHTML = "<img src=\"retire.png\"></img>";
};
    
var movAbe = function(){ 
	document.getElementById(adventure.yCoord.toString() + adventure.xCoord.toString()).innerHTML = "<img src=\"small_abe.png\"></img>";
};

//refactoring hideAbe

var hideAbe = function (xChange, yChange) {
	document.getElementById((adventure.yCoord + yChange).toString() + (adventure.xCoord + xChange).toString()).innerHTML = "";
}

var holdon = new Audio('holdon.wav');
var coon = new Audio('racoon.wav');
var dead = new Audio('dead.wav');


movAbe();
target();

function mov(xDel, yDel, x, y, bound) {
	
	if(adventure.xCoord === (adventure.endX + xDel) && adventure.yCoord === (adventure.endY + yDel)) {
        adventure.xCoord += x;
        adventure.yCoord += y;
        hideAbe(xDel, yDel);	
        killAbe();
        dead.play();
        alert("Whuuthaa!!??");
	}
	else if (adventure.yCoord === bound && yDel != 0) {
        holdon.play();
        alert("D'oh!!!");
    }
    else if (adventure.xCoord === bound && xDel != 0) {
        coon.play();
        alert("D'oh!!!");
    }
        else {
        adventure.xCoord += x;
        adventure.yCoord += y;
		hideAbe(xDel, yDel);
		movAbe();
	};
}

function movDown() {
	mov(0, -1, 0, 1, 8);
}; 
function movUp() {
	mov(0, 1, 0, -1, 0);
}; 
function movLeft() {
	mov(1, 0, -1, 0, 0);
}; 
function movRight() {
	mov(-1, 0, 1, 0, 8);
};

function reset() {
    hideAbe(0,0);
    adventure.xCoord = 0;
    adventure.yCoord = 0;
    movAbe();
    target();
}
