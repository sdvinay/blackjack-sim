var expect = require('chai').expect;
var Cards = require('../../lib/cards');
var strategy = require('../../lib/strategies/dealer');

// This test function is dealer-specific, as there's no way to specify
// the dealer hole card.
function testHitDecision(handStr, exp) {
	var desc = exp + "s on " + handStr;
	it (desc, function() {
		var h = Cards.makeHand(handStr);
		var decision = strategy.hitDecision(h, h[0]);
		expect(decision).to.equal(exp);
	});
}
describe('dealerStrategy', function() {
	describe('hitDecision', function() {
		testHitDecision("6S 4C", "hit");
		testHitDecision("TS 4C", "hit");
		testHitDecision("TS 7C", "stand");
		testHitDecision("AS 7C", "stand");
		testHitDecision("AS 6C", "hit");
		testHitDecision("AS 6C TD", "stand");
	});
});
