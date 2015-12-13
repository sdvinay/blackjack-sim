var Scoring = require ('../scoring');

var hitDecision = function(hand, dealerHoleCard) {
	var score = Scoring.scoreHand(hand);
	var hole = dealerHoleCard.getValue();
	if (hole === 1) { hole = 11; }
	if (score.score < 12) {
		return 'hit';
	}
	if (score.score === 12 && hole < 4) {
		return 'hit';
	}
	if (score.score < 17 && hole > 6) {
		return 'hit';
	}
	if (score.soft == true && score.score == 17) {
		return 'hit';
	}
	if (score.soft == true && score.score == 18 && hole > 8) {
		return 'hit';
	}
	return 'stand';
}

module.exports = {
	hitDecision: hitDecision
};
