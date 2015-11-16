

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

var makeHand = function(str) {
	// TODO
}

var displayHand = function(hand) {
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
	 makeDeck: makeDeck
}
