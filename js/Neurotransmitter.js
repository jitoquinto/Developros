/*
	100% python free code.
*/

var width = $(window).width() - 500;
var height = $(window).height() - 20;

var game;

var Neurotransmitter = function (phgame) {
	console.log("Creating Neurotransmitter object");
	// When a Neurotransmitter object is created, it creates a Phaser game #getRekt
	game = new Phaser.Game(width, height, Phaser.AUTO, '', {
    preload: doesNothing, create: doesNothing, update: doesNothing
	});
	
};

function doesNothing() {
	//console.log("Doing nothing");
	this.game.stage.backgroundColor =  0x0000ff;//Phaser.Color.getRandomColor(50, 255, 255); //#127898;
}

// These are the different states/screens the game moves through
var instructionState;
var playState;
var resultState;

// Keeps track of current state of object
var currentState;

var backgroundColorValue = 0xff0000;

function preload() {
    instructionState = new InstructionState(game);
    playState = new PlayState(game);
	scoreState = new ResultState(game);
}

function create() {
    currentState = instructionState;
	currentState.enable();
}

function update() {
    var oldState = currentState;
    switch (currentState.tick()) {
        case "INSTRUCTIONSTATE":
            currentState = startState;
            break;
        case "PLAYSTATE":
            currentState = playState;
            break;
		case "RESULTSTATE":
            currentState = scoreState;
            break;
    }
    if (oldState != currentState) {
        oldState.disable();
        currentState.enable();
    }
}



    
   // this.game.stage.backgroundColor = #127898; // updates background
