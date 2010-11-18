function Board(width, height) {
	this.width = width;
	this.height = height;
}

Board.prototype.cell = function(width, height) {
	return Ball.BLUE;
}