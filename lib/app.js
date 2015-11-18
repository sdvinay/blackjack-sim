var Cards = require('./cards');
var Scoring = require('./scoring');
var Shuffler = require('./shufflers/pure_random');

// some tests for scoreHand

var deck = Cards.makeDeck();
console.log(Cards.displayHand(deck));
console.log(Cards.displayHand(Shuffler.shuffle(deck)));


