
var scoreHand = function(cards) {
	var score = 0;
	var hasAce = false;
	for (i in cards) {
		score += cards[i].getValue();
		if (cards[i].getValue() == 1) {
			hasAce = true;
		}
	}
	if (score < 12 && hasAce == true)
	{
		score += 10;
	}

	return {"score": score, "blackjack": (score == 21 && cards.length == 2)};
}


module.exports = {
scoreHand: scoreHand
}
