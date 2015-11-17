

var Card = function(rank, suit)
{
	this.rank = rank;
	this.suit = suit;
}

Card.prototype.getValue = function() {
	return (this.rank > 10) ? 10 : this.rank;
}

Card.prototype.getName = function() {
	return ranks[this.rank] +this.suit;
}

var suits = ["S", "H", "C", "D"];
var ranks = [false, "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"]

// A hand is an array of cards

// This is a convenience function to instantiate cards and add them to a hand
// Takes a string of format e.g. "7H AC TD"
var makeHand = function(str) {
	var cards = str.split(" ");
	var hand = [];
	for (card in cards) {
		var s = cards[card];
		var rank = ranks.indexOf(s[0]);
		if (rank == -1) {
			throw RangeError("bad rank in card " + s);
		}
		var suit = s[1];
		hand.push(new Card(rank, suit));
	}
	return hand;
}

var displayHand = function(hand) {
	return hand.map(c => c.getName()).join(' ');
}

var makeDeck = function()
{
	var deck = [];
	for (var suit in suits)
	{
		for (var i = 1; i < 14; i++)
		{
			deck.push(new Card(i,suits[suit]));
		}
	}
	return deck;
}

module.exports = {
	Card: Card,
	makeDeck: makeDeck,
	makeHand: makeHand,
	displayHand: displayHand,
}
