var Cards = require('./cards');
var Scoring = require('./scoring');

// some tests for scoreHand
var hand = [];
hand.push(new Cards.Card(7, "C"));
hand.push(new Cards.Card(1, "D"));
console.log(hand.map(card => card.getName()), Scoring.scoreHand(hand));
var testScoreHand = function(cards) {
}

var deck = Cards.makeDeck();
for (i in deck){
	card = deck[i];
	//console.log(card.getName(), card.getValue());
}


