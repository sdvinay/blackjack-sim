// This module defines some basic types and functions for using
// cards in blackjack: Card, deck, hand, etc

// Card is an object made up of a rank and suit
// hands and decks are simple arrays of cards, rather than objects of their own
// makeHand() will make a hand from a text string (e.g."7H AC TD")
// displayHand() basically does the opposite, outputting a string in that format

var suits = ["S", "H", "C", "D"];
var ranks = [false, "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

var Card = function(rank, suit) {
	this.rank = rank;
	this.suit = suit;
}

Card.prototype.getValue = function() {
	return (this.rank > 10) ? 10 : this.rank;
}

Card.prototype.getName = function() {
	return ranks[this.rank] +this.suit;
}

var makeCard = function(rank, suit) { return new Card(rank, suit);};

var getCardValue = function(c) { return c.getValue(); };
var getCardName = function(c) { return c.getName(); };

// makeHand() is a convenience function to instantiate cards and add them to a hand
// Takes a string of format e.g. "7H AC TD"
var makeHand = function(str) {
	var cards = str.split(" ");
	var hand = [];
	for (i = 0; i < cards.length; i++) {
		var s = cards[i];
		var rank = ranks.indexOf(s[0]);
		if (rank == -1) {
			throw RangeError("bad rank in card " + s);
		}
		var suit = s[1];
		hand.push(new Card(rank, suit));
	}
	return hand;
}

// displayHand() displays a hand in the same format taken in by makeHand()
var displayHand = function(hand) {
	return hand.map(c => c.getName()).join(' ');
}

var makeDeck = function() {
	var deck = [];
	for (var j=0; j < suits.length; j++) {
		for (var i = 1; i < 14; i++) {
			deck.push(new Card(i,suits[j]));
		}
	}
	return deck;
}

module.exports = {
	//Card: Card,
	makeDeck: makeDeck,
	makeHand: makeHand,
	makeCard: makeCard,
	displayHand: displayHand,
	getCardValue: getCardValue,
	getCardName: getCardName
}
