describe('Board', function() {

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

	it('intializes with full board of balls', function() {
		var board = new Board(1, 1);
		expect(board.ball(0, 0)).toBeValidColor();
	});

	it('initializes a board that has multiple colors', function() {
		var board = new Board(10, 10);
		var foundColors = new Array();

		for ( var x = 0; x < 10; x++)
			for ( var y = 0; y < 10; y++)
				foundColors[board.ball(x, y)] = true;

		expect(foundColors).hasLengthGreaterThan(1);
	});

	it('has static balls', function() {
		var board = new Board(10, 10);
		for ( var x = 0; x < 10; x++)
			for ( var y = 0; y < 10; y++)
				expect(board.ball(x, y)).toEqual(board.ball(x, y));
	});

});
