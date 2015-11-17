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

describe('getName and ranks', function() {
	it ('handles ace', function() {
		var c = new Cards.Card(1, "H");
		expect(c.getName()).to.equal("AH");
	});
	it ('handles numbers', function() {
		var c = new Cards.Card(2, "H");
		expect(c.getName()).to.equal("2H");
	});
	it ('handles ten', function() {
		var c = new Cards.Card(10, "H");
		expect(c.getName()).to.equal("TH");
	});
	it ('handles king', function() {
		var c = new Cards.Card(13, "H");
		expect(c.getName()).to.equal("KH");
	});
});


describe('getValues and ranks', function() {
	it ('handles ace', function() {
		var c = new Cards.Card(1, "H");
		expect(c.getValue()).to.equal(1);
	});
	it ('handles numbers', function() {
		var c = new Cards.Card(2, "H");
		expect(c.getValue()).to.equal(2);
	});
	it ('handles ten', function() {
		var c = new Cards.Card(10, "H");
		expect(c.getValue()).to.equal(10);
	});
	it ('handles king', function() {
		var c = new Cards.Card(13, "H");
		expect(c.getValue()).to.equal(10);
	});
});
