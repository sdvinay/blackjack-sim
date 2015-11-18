var expect = require('chai').expect;
var Cards = require('../lib/cards');

var runDeckTests = function(deck) {
	it('returns 52 cards', function(){
		expect(deck.length).to.equal(52);
	});

	it('returns no repeated cards', function(){
		var deck = Cards.makeDeck();
		var cards = {};
		for (var i = 0; i< deck.length; i++) {
			var cardName = deck[i].getName();
			expect(cards[cardName]).a('undefined');
			cards[cardName] = "already exists";
		}
	});
};

module.exports = {
	runDeckTests: runDeckTests
};
