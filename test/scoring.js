var expect = require('chai').expect;
var Scoring = require('../lib/scoring');
var Cards = require('../lib/cards');

describe('scoreHand', function(){
	it('scores a simple two-card case', function(){
		var hand = Cards.makeHand("3H 7C");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 10);
		expect(score).property('blackjack', false);
	});
	it('scores a simple five-card case', function(){
		var hand = Cards.makeHand("3H 7C 2D 6C 5S");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 23);
		expect(score).property('blackjack', false);
	});
	it('scores a three-card case with face cards', function(){
		var hand = Cards.makeHand("3H KC TD");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 23);
		expect(score).property('blackjack', false);
	});
	it('uses an ace as 1', function(){
		var hand = Cards.makeHand("7H 8C AD");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 16);
		expect(score).property('blackjack', false);
	});
	it('uses an ace as 11', function(){
		var hand = Cards.makeHand("7H AD");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 18);
		expect(score).property('blackjack', false);
	});
	it('credits blackjack on AK', function(){
		var hand = Cards.makeHand("KH AD");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 21);
		expect(score).property('blackjack', true);
	});
	it('credits blackjack on AT', function(){
		var hand = Cards.makeHand("TH AD");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 21);
		expect(score).property('blackjack', true);
	});
	it('credits 21 but no blackjack on A64', function(){
		var hand = Cards.makeHand("AS 6C 4H");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 21);
		expect(score).property('blackjack', false);
	});
	it('credits 21 but no blackjack on A4K6', function(){
		var hand = Cards.makeHand("AC 4H KD 6D");
		var score = Scoring.scoreHand(hand);
		expect(score).property('score', 21);
		expect(score).property('blackjack', false);
	});
});

