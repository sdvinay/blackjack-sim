
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

var scoreHand = function(cards) {
	var score = 0;
	var hasAce = false;
	for (i in cards) {
		score += cards[i].getValue();
		if (cards[i].getValue() == 1) {
			hasAce = true;
		}
	}
	if (score < 12 && hasAce == true)
	{
		score += 10;
	}

	//if (score == 21 && cards.length == 2) // TODO
	return {"score": score, "blackjack": false};
}


// some tests for scoreHand
var hand = [];
hand.push(new Card(7, "C"));
hand.push(new Card(1, "D"));
console.log(hand.map(card => card.getName()), scoreHand(hand));
var testScoreHand = function(cards) {
}

var deck = makeDeck();
for (i in deck){
	card = deck[i];
	//console.log(card.getName(), card.getValue());
}


