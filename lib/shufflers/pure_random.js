
var shuffle = function(deck) {
	var from = deck.slice();
	var to = [];
	while(from.length > 0) {
		var i = Math.floor(from.length * Math.random());
		to.push(from.splice(i,1)[0]);
	}
	return to;
}

module.exports = {
	shuffle: shuffle
}
