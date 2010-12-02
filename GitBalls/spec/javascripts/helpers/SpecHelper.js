beforeEach(function() {
	this.addMatchers( {
		toBePlaying : function(expectedSong) {
			var player = this.actual;
			return player.currentlyPlayingSong === expectedSong
					&& player.isPlaying;
		},
		toBeValidColor : function() {
			var color = this.actual.color;
			return (color === Ball.RED || color === Ball.GREEN
					|| color === Ball.BLUE || color === Ball.YELLOW);
		},
		hasLengthGreaterThan : function(size) {
			var count = 0;
			for ( var index in this.actual) {
				count++;
			}
			return count > size;
		}
	})
});