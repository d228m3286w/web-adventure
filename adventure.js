

// Initializing the corrdinates of the target cell 

console.log('hello');

var adventure =  {
	yCoord: 0,
	xCoord: 0,
	endX: 8,
	endY: 8,

	mov: function(xDel, yDel, x, y, bound) {

		if(this.xCoord === (this.endX + xDel) && this.yCoord === (this.endY + yDel)) {
        	this.xCoord += x;
        	this.yCoord += y;
        	hideAbe(xDel, yDel);	
        	killAbe();
       		dead.play();
       		alert("Whuuthaa!!??");
		} else if (this.yCoord === bound && yDel != 0) {
            holdon.play();
            alert("D'oh!!!");
    	} else if (this.xCoord === bound && xDel != 0) {
        	coon.play();
        	alert("D'oh!!!");
    	} else {
        	this.xCoord += x;
        	this.yCoord += y;
			hideAbe(xDel, yDel);
			movAbe();
		}

		var movRight = function(){
			alert("hello")
		}

		// movDown: function () {

		// 	mov(0, -1, 0, 1, 8);
		// },

		// movUp: function () {
		// 	mov(0, 1, 0, -1, 0);
		// },

		// movLeft: function () {
		// 	mov(1, 0, -1, 0, 0);
		// },

		// movRight: function () {
		// 	mov(-1, 0, 1, 0, 8);
		// },

		// reset: function () {
	 //    	hideAbe(0,0);
	 //    	this.xCoord = 0;
	 //    	this.yCoord = 0;ß
	 //    	movAbe();
	 //    	target();
		// }
	}


};