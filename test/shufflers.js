var expect = require('chai').expect;
var Cards = require('../lib/cards');
var deckTest = require('./deck');
var shuffler = require('../lib/shufflers/pure_random');

describe('pure_random shuffler', function(){
		deckTest.runDeckTests(shuffler.shuffle(Cards.makeDeck()));
});


