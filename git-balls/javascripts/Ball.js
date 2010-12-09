var Ball = {
	RED : 'red',
	GREEN : 'green',
	BLUE : 'blue',
	YELLOW : 'yellow',

	randomBall : function() {
		var colors = [ this.RED, this.GREEN, this.BLUE, this.YELLOW ];
		var ball = {
			color : colors[Math.floor(Math.random() * 4)],
			selected : false,
			toggleSelected : function() {
				this.selected = !this.selected;
			}
		};
		return ball;
	}


};
