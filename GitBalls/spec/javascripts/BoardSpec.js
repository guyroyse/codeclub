describe('Board', function() {

	it('has a height and width', function() {
		var board = createBoard(3, 4);
		expect(board.getWidth()).toEqual(3);
		expect(board.getHeight()).toEqual(4);
	});

	it('has variable height and width', function() {
		var board = createBoard(4, 6);
		expect(board.getWidth()).toEqual(4);
		expect(board.getHeight()).toEqual(6);
	});

	it('intializes with full board of balls', function() {
		var board = createBoard(1, 1);
		expect(board.ball(0, 0)).toBeValidColor();
	});

	it('initializes a board that has multiple colors', function() {
		var board = createBoard(10, 10);
		var foundColors = {};

		for ( var x = 0; x < 10; x++)
			for ( var y = 0; y < 10; y++)
				foundColors[board.ball(x, y).color] = true;

		expect(foundColors).hasLengthGreaterThan(1);
	});

	it('has static balls', function() {
		var board = createBoard(10, 10);
		for ( var x = 0; x < 10; x++)
			for ( var y = 0; y < 10; y++)
				expect(board.ball(x, y)).toEqual(board.ball(x, y));
	});
	
	it('toggles the selected state of the ball when clicked', function() {
		var board = createBoard(1, 1);
		board.clickBall(0, 0);
		expect(board.ball(0, 0).selected).toBeTruthy();
		board.clickBall(0, 0);
		expect(board.ball(0, 0).selected).toBeFalsy();
	});
		
});
