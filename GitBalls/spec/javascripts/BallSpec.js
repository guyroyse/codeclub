describe('Ball', function() {
	
	it("knows it's color", function() {
		var ball = new Ball(Ball.BLUE)
		expect(ball.color).toEqual(Ball.BLUE)
		expect(ball.color).toNotEqual(Ball.RED)
	});
	
	it("knows what colors are what", function() {
		expect(Ball.BLUE).toEqual('blue');
		expect(Ball.YELLOW).toEqual('yellow');
		expect(Ball.RED).toEqual('red');
		expect(Ball.GREEN).toEqual('green');
	});
	
});