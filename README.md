# blackjack-sim

## Get up and running

To get the code and dependencies:

    git clone
    npm install

The probject currently depends on node v4.*.  If you have that installed already, 
you can run the app and tests directly.  The app (npm start) currently simulates
100 hands with three players, each playing the dealer's strategy.

    npm start
    npm test
    npm jshint
  
If you don't have node v4, you can run it in docker.  If you have docker-machine already running:

    npm docker-start
    npm docker-test
