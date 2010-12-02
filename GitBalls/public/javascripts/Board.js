function Board(width, height) {
	this.width = width;
	this.height = height;
	this.balls = new Array();
	
	for (var x = 0; x < width; x++) {
		this.balls[x] = new Array();
		for (var y = 0; y < height; y++) {
			this.balls[x][y] = Ball.randomBall(); 
		}
	}
}

Board.prototype.ball = function(width, height) {
	return this.balls[width][height];
}