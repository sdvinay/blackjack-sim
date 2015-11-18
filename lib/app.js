var Cards = require('./cards');
var Scoring = require('./scoring');
var Shuffler = require('./shufflers/pure_random');
var playerStrategy = require('./strategies/big_hitter');
var dealerStrategy = require('./strategies/dealer');

// some tests for scoreHand
debugger;

var deck = Shuffler.shuffle(Cards.makeDeck());
console.log(Cards.displayHand(deck));
var numPlayers = 1;
var hands = deal(deck, numPlayers);
console.log(hands.map(Cards.displayHand));
for (var i = 0; i < numPlayers; i++) {
	playerPlayHand(playerStrategy, hands[i], hands[numPlayers][0], deck);
}
playerPlayHand(dealerStrategy, hands[numPlayers], hands[numPlayers][0], deck);
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

function playerPlayHand(strategy, hand, dealerHoleCard, deck) {
	// while player is not busted
	while (Scoring.scoreHand(hand).score <= 21) {
		var decision = strategy.hitDecision(hand, dealerHoleCard);
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
