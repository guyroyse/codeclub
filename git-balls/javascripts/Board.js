var createBoard = function(width, height) {

	var initializeBoard = function() {
		var balls = [];
		for (var x = 0; x < width; x++) {
			balls[x] = [];
			for (var y = 0; y < height; y++) {
				balls[x][y] = Ball.randomBall(); 
			}
		}
		return balls;
	};

	var balls = initializeBoard();
	
	var board = {
		getHeight : function() { return height; },
		getWidth : function() { return width; },
		ball : function(x, y) { return balls[x][y]; },
		clickBall : function(x, y) { this.ball(x, y).toggleSelected(); }
	};
	
	return board;
};

