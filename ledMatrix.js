var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	var matrix = new five.Led.Matrix({
		pins: {
			data: 5,
			clock: 7,
			cs: 6
		},
		devices: 1
	});

	var i = 0, j = 0, x = 0;


	this.loop(50, function() {
		
		matrix.led(i, j, 1);

		matrix.led(i-1,j, 0);



		i++;
		if (i == 8-x){
			
			i = 0;

			if (j == 7) {
				j = 0;
				x++;
			} else {
				j++;
			}
			
			if (x == 8) {
				x = 0;
			}
		}

		
	});

});

