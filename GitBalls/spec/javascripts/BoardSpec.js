describe('a game board', function() {
	
	it('has a height and width', function() {
		var board = new Board(3, 4);
		expect(board.width).toEqual(3);
		expect(board.height).toEqual(4);
	});
	
	it('has variable height and width', function() {
		var board = new Board(4, 6);
		expect(board.width).toEqual(4);
		expect(board.height).toEqual(6);
	});
	
	it('has a ball in each cell', function() {
		var board = new Board(1, 1);
		board.cell(0, 0, Ball.BLUE);
		expect(board.cell(0, 0)).toEqual(Ball.BLUE);
	});
});
