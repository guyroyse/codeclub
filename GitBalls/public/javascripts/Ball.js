var Ball = {
	RED : 'red',
	GREEN : 'green',
	BLUE : 'blue',
	YELLOW : 'yellow',

	randomBall : function() {
		var colors = [ this.RED, this.GREEN, this.BLUE, this.YELLOW ];
		return colors[Math.floor(Math.random() * 4)];
	}
};
