// scoreHand provides typical blackjack scoring
// it makes some assumptions about basic blackjack rules:
//    at least two cards
//    21 is the limit
//    ace behavior
// scoreHand() returns an object with "score" as integer, and
//    booleans "blackjack" and "soft"

var scoreHand = function(cards) {
	var score = 0;
	var hasAce = false;
	var soft = false;
	for (var i = 0; i < cards.length; i++) {
		var val = cards[i].getValue();
		score += val;
		if (val == 1) {
			hasAce = true;
		}
	}
	if (score < 12 && hasAce === true) {
		score += 10;
		soft = true;
	}

	return {
		"score": score, 
		"blackjack": (score == 21 && cards.length == 2), 
		"soft": soft
	};
};

module.exports = {
	scoreHand: scoreHand
};
