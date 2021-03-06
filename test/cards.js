var expect = require('chai').expect;
var Cards = require('../lib/cards');
var deckTest = require('./deck');

describe('makeDeck', function(){
		deckTest.runDeckTests(Cards.makeDeck());
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
	var testMakeHand = function(str, expectedLength, expectedValuesArray) {
		var h = Cards.makeHand(str);
		expect(h).to.have.property('length', expectedLength);
		expect(h.map(x => x.getName()).join(" ")).to.equal(str);
		expect(h.map(x => x.getValue())).to.deep.equal(expectedValuesArray);
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
