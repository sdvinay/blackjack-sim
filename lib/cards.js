// This module defines some basic types and functions for using
// cards in blackjack: Card, deck, hand, etc

// Card is an object made up of a rank and suit
// hands and decks are simple arrays of cards, rather than objects of their own
// makeHand() will make a hand from a text string (e.g."7H AC TD")
// displayHand() basically does the opposite, outputting a string in that format

var suits = ["S", "H", "C", "D"];
var ranks = [false, "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

var makeCard = function(rank, suit) { return {"rank": rank, "suit":suit};};

var getCardValue = function(c) { 
	return (c.rank > 10) ? 10 : c.rank;
};
var getCardName = function(c) {
	return ranks[c.rank] +c.suit;
}

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
		hand.push(makeCard(rank, suit));
	}
	return hand;
}

// displayHand() displays a hand in the same format taken in by makeHand()
var displayHand = function(hand) {
	return hand.map(getCardName).join(' ');
}

var makeDeck = function() {
	var deck = [];
	for (var j=0; j < suits.length; j++) {
		for (var i = 1; i < 14; i++) {
			deck.push(makeCard(i,suits[j]));
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
