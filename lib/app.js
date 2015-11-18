var Cards = require('./cards');
var Scoring = require('./scoring');
var Shuffler = require('./shufflers/pure_random');

// some tests for scoreHand
debugger;

var deck = Shuffler.shuffle(Cards.makeDeck());
console.log(Cards.displayHand(deck));
var numPlayers = 1;
var hands = deal(deck, numPlayers);
console.log(hands.map(Cards.displayHand));
for (var i = 0; i < numPlayers; i++) {
	playerPlayHand(hands[i], hands[numPlayers][0], deck);
}
console.log(hands.map(Cards.displayHand));

function deal(deck, numPlayers) {
	var hands = [];
	for (var i = 0; i < numPlayers+1; i++) {
		hands[i] = [];
	}
	for (var card = 0; card < 2; card++) {
		for (var i = 0; i < numPlayers+1; i++) {
			hands[i].push(deck.pop());
		}
	}
	return hands;
}

function playerPlayHand(hand, dealerHoleCard, deck) {
	// while player is not busted
	while (Scoring.scoreHand(hand).score <= 21) {
		var decision = playerDecision(hand, dealerHoleCard);
		switch(decision) {
			case 'hit': //   hit: add a card
				hand.push(deck.pop());
				break;
			case 'stand': //   stand: return
				return;
				break;
			default:
				throw Error("Unknown action: " + decision);
		}
	}

}

function playerDecision(hand, dealerHoleCard) {
	// naive strategy that just always hits now
	return "hit";
}
