var Scoring = require ('../scoring');

var hitDecision = function(hand, dealerHoleCard) {
	var score = Scoring.scoreHand(hand);
	if (score.score < 17) {
		return 'hit';
	}
	return 'stand';
}

module.exports = {
	hitDecision: hitDecision
};
