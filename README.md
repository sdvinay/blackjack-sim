# blackjack-sim

## Get up and running

To get the code and dependencies:

    git clone git@github.com:sdvinay/blackjack-sim.git
	cd blackjack-sim
    npm install

The probject currently depends on node v4.*.  If you have that installed already, 
you can run the app and tests directly.  The app (npm start) currently simulates
100 hands with three players, each playing the dealer's strategy.

    npm test
    npm jshint
    npm start
  
If you don't have node v4, you can run it in docker.  If you have docker-machine already running:

    npm docker-start
    npm docker-test
