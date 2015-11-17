var expect = require('chai').expect;
var Cards = require('../lib/cards');

describe('makeDeck', function(){
	it('returns 52 cards', function(){
		var deck = Cards.makeDeck();
		expect(deck.length).to.equal(52);
	});

	it('returns no repeated cards', function(){
		var deck = Cards.makeDeck();
		for (i in deck) {
			for (var j = 0; j<i; j++) {
				expect(deck[i]).to.not.deep.equal(deck[j]);
			}
		}
	});
});
