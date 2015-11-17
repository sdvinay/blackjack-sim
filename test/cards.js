var expect = require('chai').expect;
var Cards = require('../lib/cards');

describe('makeDeck', function(){
	it('returns 52 cards', function(){
		var deck = Cards.makeDeck();
		expect(deck.length).to.equal(52);
	});

	it('returns no repeated cards', function(){
		var deck = Cards.makeDeck();
		var cards = {};
		for (var i = 0; i< deck.length; i++) {
			var cardName = Cards.getCardName(deck[i]);
			expect(cards[cardName]).a('undefined');
			cards[cardName] = "already exists";;
		}
	});
});

describe('getName and ranks', function() {
	it ('handles ace', function() {
		var c = Cards.makeCard(1, "H");
		expect(Cards.getCardName(c)).to.equal("AH");
	});
	it ('handles numbers', function() {
		var c = Cards.makeCard(2, "H");
		expect(Cards.getCardName(c)).to.equal("2H");
	});
	it ('handles ten', function() {
		var c = Cards.makeCard(10, "H");
		expect(Cards.getCardName(c)).to.equal("TH");
	});
	it ('handles king', function() {
		var c = Cards.makeCard(13, "H");
		expect(Cards.getCardName(c)).to.equal("KH");
	});
});


describe('getValues and ranks', function() {
	it ('handles ace', function() {
		var c = Cards.makeCard(1, "H");
		expect(Cards.getCardValue(c)).to.equal(1);
	});
	it ('handles numbers', function() {
		var c = Cards.makeCard(2, "H");
		expect(Cards.getCardValue(c)).to.equal(2);
	});
	it ('handles ten', function() {
		var c = Cards.makeCard(10, "H");
		expect(Cards.getCardValue(c)).to.equal(10);
	});
	it ('handles king', function() {
		var c = Cards.makeCard(13, "H");
		expect(Cards.getCardValue(c)).to.equal(10);
	});
});

describe('makeHand', function() {
	var testMakeHand = function(str, expectedLength, expectedValuesArray) {
		var h = Cards.makeHand(str);
		expect(h).to.have.property('length', expectedLength);
		expect(h.map(Cards.getCardName).join(" ")).to.equal(str);
		expect(h.map(Cards.getCardValue)).to.deep.equal(expectedValuesArray);
	};

	it ('handles a single card', function() {
		testMakeHand("7H", length=1, [7]);
	});
	it ('handles an ace', function() {
		testMakeHand("AH", length=1, [1]);
	});
	it ('handles a king', function() {
		testMakeHand("KH", length=1, [10]);
	});
	it ('handles two cards', function() {
		testMakeHand("7H AC", length=2, [7,1]);
	});
	it ('handles three cards', function() {
		testMakeHand("7H AC TD", length=3, [7,1,10]);		
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
