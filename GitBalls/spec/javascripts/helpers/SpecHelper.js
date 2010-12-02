beforeEach(function() {
	this.addMatchers( {
		toBePlaying : function(expectedSong) {
			var player = this.actual;
			return player.currentlyPlayingSong === expectedSong
					&& player.isPlaying;
		},
		toBeValidColor : function() {
			var cell = this.actual;
			return (cell === Ball.RED || cell === Ball.GREEN
					|| cell === Ball.BLUE || cell === Ball.YELLOW);
		},
		hasLengthGreaterThan : function(size) {
			var array = this.actual;
			var count = 0;

			for ( var index in array) {
				count++;
			}

			return count > size;
		}
	})
});