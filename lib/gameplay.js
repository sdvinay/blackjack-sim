var Cards = require('./cards');
var Scoring = require('./scoring');
var Shuffler = require('./shufflers/pure_random');

var deck = Cards.makeDeck();

var handOutcomes = {
	LOSS: 0,
	SURRENDER: 0.5,
	PUSH: 1,
	WIN: 2,
	BLACKJACK: 2.5
};

var resolveHand = function(playerScore, dealerScore) {
	if (playerScore.blackjack === true && playerScore.blackjack === true) {
		return handOutcomes.PUSH;
	} else if (playerScore.blackjack === true) {
		return handOutcomes.BLACKJACK;
	} else if (dealerScore.blackjack === true) {
		return handOutcomes.LOSS;
	} else if (playerScore.score > 21) {
		return handOutcomes.LOSS;
	} else if (dealerScore.score > 21) {
		return handOutcomes.WIN;
	} else if (playerScore.score === dealerScore.score) {
		return handOutcomes.PUSH;
	} else if (playerScore.score < dealerScore.score) {
		return handOutcomes.LOSS;
	} else if (playerScore.score > dealerScore.score) {
		return handOutcomes.WIN;
	}
};

var playHand = function (deck, numPlayers, playerStrategy, dealerStrategy) {

	var hands = deal(deck, numPlayers);
	var outcomes = [];
	console.log(hands.map(Cards.displayHand));
	// play the players' hands
	for (var i = 0; i < numPlayers; i++) {
		playerPlayHand(playerStrategy, hands[i], hands[numPlayers][0], deck);
	}

	// play the dealer's hand
	playerPlayHand(dealerStrategy, hands[numPlayers], hands[numPlayers][0], deck);
	console.log(hands.map(Cards.displayHand));

	// calculate the remaining outcomes
	var dscore = Scoring.scoreHand(hands[numPlayers]);
	for (i = 0; i < numPlayers; i++) {
		var pscore = Scoring.scoreHand(hands[i]);
		outcomes[i] = resolveHand(pscore, dscore);
	}

	return outcomes;

};
function deal(deck, numPlayers) {
	var hands = [];
	for (var i = 0; i < numPlayers+1; i++) {
		hands[i] = [];
	}
	for (var card = 0; card < 2; card++) {
		for (i = 0; i < numPlayers+1; i++) {
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
			default:
				throw Error("Unknown action: " + decision);
		}
	}
}
module.exports = {
	playHand: playHand
};
