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

describe('makeHand', function() {
	it ('handles a single card', function() {
		var str = "7H";
		var h = Cards.makeHand(str);
		expect(h.length).to.equal(1);
		expect(h[0].getName()).to.equal(str);
		expect(h[0].getValue()).to.equal(7);
	});
	it ('handles an ace', function() {
		var str = "AH";
		var h = Cards.makeHand(str);
		expect(h.length).to.equal(1);
		expect(h[0].getName()).to.equal(str);
		expect(h[0].getValue()).to.equal(1);
	});
	it ('handles a king', function() {
		var str = "KH";
		var h = Cards.makeHand(str);
		expect(h.length).to.equal(1);
		expect(h[0].getName()).to.equal(str);
		expect(h[0].getValue()).to.equal(10);
		expect(h[0].rank).to.equal(13);
	});
	it ('handles two cards', function() {
		var str = "7H AC";
		var h = Cards.makeHand(str);
		expect(h.length).to.equal(2);
		expect(h[0].getName()).to.equal(str.split(' ')[0]);
		expect(h[1].getName()).to.equal(str.split(' ')[1]);
		expect(h[0].getValue()).to.equal(7);
		expect(h[1].getValue()).to.equal(1);
	});
	it ('handles three cards', function() {
		var str = "7H AC TD";
		var h = Cards.makeHand(str);
		expect(h.length).to.equal(3);
		expect(h.map(x => x.getName()).join(" ")).to.equal(str);
		expect(h[0].getValue()).to.equal(7);
		expect(h[1].getValue()).to.equal(1);
		expect(h[2].getValue()).to.equal(10);
	});
	it ('throws on a bad rank', function() {
		var str = "FH";
		var fn = function() { Cards.makeHand(str);};
		expect(fn).to.throw(Error);
		expect(fn).to.throw(RangeError);
		expect(fn).to.throw(str);
	});
});


describe('makeHand and displayHand correspond', function() {
	it ('for a single card', function() {
		var str = "7H";
		var h = Cards.makeHand(str);
		expect(Cards.displayHand(h)).to.equal(str);
	});
	it ('for three cards', function() {
		var str = "7H AC TD";
		var h = Cards.makeHand(str);
		expect(Cards.displayHand(h)).to.equal(str);
	});
});
