var expect = require('chai').expect;
var Cards = require('../../lib/cards');
var strategy = require('../../lib/strategies/basic');

function testHitDecision(handStr, holeCard, exp) {
	var desc = exp + "s on " + handStr + " vs " + holeCard;
	it (desc, function() {
		var h = Cards.makeHand(handStr);
		var d = Cards.makeHand(holeCard);
		var decision = strategy.hitDecision(h, d[0]);
		expect(decision).to.equal(exp);
	});
}
describe('basicStrategy', function() {
	describe('hitDecision', function() {
		testHitDecision("6S 2C", "JC", "hit");
		testHitDecision("6S 2C", "7C", "hit");
		testHitDecision("6S 3C", "7C", "hit");
		testHitDecision("6S 4C", "JC", "hit");
		testHitDecision("6S 4C", "6C", "hit");
		testHitDecision("6S 5C", "6C", "hit");
		testHitDecision("6S 5C", "JC", "hit");
		testHitDecision("6S 5C", "AC", "hit");
		testHitDecision("7S 4C", "AC", "hit");
		testHitDecision("8S 4C", "AC", "hit");
		testHitDecision("8S 4C", "2C", "hit");
		testHitDecision("8S 4C", "3C", "hit");
		testHitDecision("8S 4C", "4C", "stand");
		testHitDecision("8S 4C", "6C", "stand");
		testHitDecision("8S 4C", "7C", "hit");
		testHitDecision("9S 4C", "2C", "stand");
		testHitDecision("9S 4C", "6C", "stand");
		testHitDecision("9S 4C", "7C", "hit");
		testHitDecision("TS 4C", "JC", "hit");
		testHitDecision("TS 4C", "AC", "hit");
		testHitDecision("TS 4C", "6S", "stand");
		testHitDecision("TS 5C", "AS", "hit");
		testHitDecision("TS 7C", "JC", "stand");
		testHitDecision("TS 7C", "AC", "stand");
		testHitDecision("TS 8C", "JC", "stand");
		testHitDecision("AS 7C", "JC", "hit");
		testHitDecision("AS 6C", "JC", "hit");
		testHitDecision("AS 6C TD", "JC", "stand");
	});
});
