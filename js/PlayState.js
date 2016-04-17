/*
    This is the screen that plays the neurotransmitter game
    Made with Javascript. Powered by physics. 
*/

var PlayState = function(phGame) {
    this.name = "PLAYSTATE";
    this.game = phGame;

    //this.game.load.image();   
}

PlayState.prototype = Object.create(GameState.prototype);


function preload(){
	
}

function tick() {
}

function enable(){
}