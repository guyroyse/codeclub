describe('Ball', function() {
	
	it("knows what colors are what", function() {
		expect(Ball.BLUE).toEqual('blue');
		expect(Ball.YELLOW).toEqual('yellow');
		expect(Ball.RED).toEqual('red');
		expect(Ball.GREEN).toEqual('green');
	});
	
	it("generates a colored ball", function() {
		expect(Ball.randomBall()).toBeValidColor();
	});
	
	it("generates a ball that is initially unselected", function(){
		expect(Ball.randomBall().selected).toBeFalsy();
	});
	
});