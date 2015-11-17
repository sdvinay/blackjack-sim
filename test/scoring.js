var expect = require('chai').expect;
var Scoring = require('../lib/scoring');
var Cards = require('../lib/cards');


var testScoreHand = function(handStr, expectedScore, bj, soft) {
	bj = bj || false;
	soft = soft || false;
	var hand = Cards.makeHand(handStr);
	var score = Scoring.scoreHand(hand);
	expect(score).property('score', expectedScore);
	expect(score).property('blackjack', bj);
	expect(score).property('soft', soft);
}

describe('scoreHand', function(){
	it('scores a simple two-card case', function(){
		testScoreHand("3H 7C", 10);
	});
	it('scores a simple five-card case', function(){
		testScoreHand("3H 7C 2D 6C 5S", 23);
	});
	it('scores a three-card case with face cards', function(){
		testScoreHand("3H KC TD", 23);
	});
	it('uses an ace as 1', function(){
		testScoreHand("7H 8C AD", 16, soft=false);
	});
	it('uses an ace as 11', function(){
		testScoreHand("7H AD", 18, bj=false, soft=true);
	});
	it('scores AA as 12 (eg, use one as 11, one as 1)', function(){
		testScoreHand("AH AD", 12, bj=false, soft=true);
	});
	it('scores 46AA as 12 (eg, use both as 1)', function(){
		testScoreHand("4C 6S AH AD", 12, bj=false, soft=false);
	});
	it('credits blackjack on KA', function(){
		testScoreHand("KH AD", 21, bj=true, soft=true);
	});
	it('credits blackjack on TA', function(){
		testScoreHand("TH AD", 21, bj=true, soft=true);
	});
	it('credits blackjack on AT', function(){
		testScoreHand("AD TH", 21, bj=true, soft=true);
	});
	it('credits 21 but no blackjack on A64', function(){
		testScoreHand("AS 6C 4H", 21, bj=false, soft=true);
	});
	it('credits 21 but no blackjack on A4K6', function(){
		testScoreHand("AC 4H KD 6D", 21, bj=false, soft=false);
	});
});

