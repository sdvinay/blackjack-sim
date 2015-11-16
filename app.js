var Cards = require('./cards');

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
hand.push(new Cards.Card(7, "C"));
hand.push(new Cards.Card(1, "D"));
console.log(hand.map(card => card.getName()), scoreHand(hand));
var testScoreHand = function(cards) {
}

var deck = Cards.makeDeck();
for (i in deck){
	card = deck[i];
	//console.log(card.getName(), card.getValue());
}


