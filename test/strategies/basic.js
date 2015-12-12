var expect = require('chai').expect;
var Cards = require('../../lib/cards');
var strategy = require('../../lib/strategies/dealer');

// This test function is dealer-specific, as there's no way to specify
// the dealer hole card.
function testHitDecision(handStr, holeCard, exp) {
	var desc = exp + "s on " + handStr + " vs " + holeCard;
	it (desc, function() {
		var h = Cards.makeHand(handStr);
		var d = Cards.makeHand(holeCard);
		var decision = strategy.hitDecision(h, d[0]);
		expect(decision).to.equal(exp);
	});
}
describe('dealerStrategy', function() {
	describe('hitDecision', function() {
		testHitDecision("6S 4C", "JC", "hit");
		testHitDecision("TS 4C", "JC", "hit");
		testHitDecision("TS 7C", "JC", "stand");
		testHitDecision("AS 7C", "JC", "stand");
		testHitDecision("AS 6C", "JC", "hit");
		testHitDecision("AS 6C TD", "JC", "stand");
	});
});
