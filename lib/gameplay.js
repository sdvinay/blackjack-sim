var Cards = require('./cards');
var Scoring = require('./scoring');
var Shuffler = require('./shufflers/pure_random');

var deck = Cards.makeDeck();

var playHand = function (deck, numPlayers, playerStrategy, dealerStrategy) {

	var hands = deal(deck, numPlayers);
	var outcomes = [];
	console.log(hands.map(Cards.displayHand));
	// play the players' hands
	for (var i = 0; i < numPlayers; i++) {
		playerPlayHand(playerStrategy, hands[i], hands[numPlayers][0], deck);
		// some outcomes are immediate
		var score = Scoring.scoreHand(hands[i]);
		if (score.blackjack == true) {
			outcomes[i] = "blackjack"; // shouldn't BJ vs BJ be a push? TODO
		} else if (score.score > 21) {
			outcomes[i] = "loss (bust)";
		}
	}

	// play the dealer's hand
	playerPlayHand(dealerStrategy, hands[numPlayers], hands[numPlayers][0], deck);
	console.log(hands.map(Cards.displayHand));

	// calculate the remaining outcomes
	var dscore = Scoring.scoreHand(hands[numPlayers]).score;
	debugger;
	for (var i = 0; i < numPlayers; i++) {
		if(outcomes[i] === undefined) {
			pscore = Scoring.scoreHand(hands[i]).score;
			if (dscore > 21) {outcomes[i] = "win (dealer bust)"}
			if (pscore > dscore) {outcomes[i] = "win"}
			if (pscore < dscore) {outcomes[i] = "loss"}
			if (pscore == dscore) {outcomes[i] = "push"}
		}
	}

	return outcomes;

};
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
module.exports = {
	playHand: playHand
};
