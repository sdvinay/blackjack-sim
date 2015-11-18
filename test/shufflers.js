var expect = require('chai').expect;
var Cards = require('../lib/cards');
var deckTest = require('./deck');
var shuffler = require('../lib/shufflers/pure_random');

describe('pure_random shuffler', function(){
	deckTest.runDeckTests(shuffler.shuffle(Cards.makeDeck()));

	it('returns a different deck than passed in', function() {
		var deck = Cards.makeDeck();
		expect(shuffler.shuffle(deck.slice())).to.not.deep.equal(deck);
	});
});


