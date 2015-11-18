var Cards = require('./cards');
var Scoring = require('./scoring');
var Shuffler = require('./shufflers/pure_random');
var playerStrategy = require('./strategies/dealer');
var dealerStrategy = require('./strategies/dealer');
var Gameplay = require('./gameplay');

// some tests for scoreHand

var deck = Shuffler.shuffle(Cards.makeDeck());
console.log(Cards.displayHand(deck));
var numPlayers = 3;

var outcomes = Gameplay.playHand(deck, numPlayers, playerStrategy, dealerStrategy);
console.log(outcomes);


