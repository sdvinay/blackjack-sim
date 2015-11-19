var Cards = require('./cards');
var Scoring = require('./scoring');
var Shuffler = require('./shufflers/pure_random');
var playerStrategy = require('./strategies/dealer');
var dealerStrategy = require('./strategies/dealer');
var Gameplay = require('./gameplay');

// configuration:
var numPlayers = 3;
var iterations = 10000;

// the data structure to hold the aggregate outcomes:
var totals = {
	numHandsPlayed: 0,
	totalPayout: 0,
	percentagePayback: 0, // this will be calculated after the fact
	net: 0,
	highWaterMark: 0,
	lowWaterMark: 0
};

// now PLAY!
for (var i = 0; i <iterations; i++) {
	// a newly shuffled deck for every iteration
	var deck = Shuffler.shuffle(Cards.makeDeck());

	var outcomes = Gameplay.playHand(deck, numPlayers, playerStrategy, dealerStrategy);
	console.log(outcomes);
	// update the totals // TODO should make this a function (totals.push())
	totals.numHandsPlayed += numPlayers;
	outcomes.forEach(o => totals.totalPayout+= o);
	totals.net = totals.totalPayout-totals.numHandsPlayed;
	if (totals.net > totals.highWaterMark) { totals.highWaterMark = totals.net; }
	if (totals.net < totals.lowWaterMark)  {  totals.lowWaterMark = totals.net; }
}

totals.percentagePayback = totals.totalPayout / totals.numHandsPlayed;

console.log(totals);

