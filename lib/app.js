var Cards = require('./cards');
var Scoring = require('./scoring');

// some tests for scoreHand
debugger;
var hand = Cards.makeHand("7C AD");
console.log(Cards.displayHand(hand), Scoring.scoreHand(hand));
var testScoreHand = function(cards) {
}

var deck = Cards.makeDeck();
for (i in deck){
	card = deck[i];
	//console.log(card.getName(), card.getValue());
}


