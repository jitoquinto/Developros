/*
	100% python free code.
*/

var width = $(window).width() - 20;
var height = $(window).height() - 20;



// These are the different states/screens the game moves through
var instructionState;
var playState;
var resultState;


// Keeps track of current state of object
var currentState;

var game;

function startNeurotransmitterGame(phGame){
	game = new Phaser.Game(width, height, Phaser.AUTO, '', {
    preload: preloadNeuro, create: createNeuro, update: updateNeuro
	
	});
	game = phGame;
	//Phaser.Timer.start();
}

// Switches up which state and screen
function updateNeuro() {
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

function doesNothing() {
	console.log("Doing nothing");
}

function preloadNeuro() {
	console.log("called preload");
    instructionState = new InstructionState(game);
	console.log("Made InstructionState");
    playState = new PlayState(game);
	console.log("Made Play State");
	resultState = new ResultState(game);
	console.log("Made Result State");
}

function createNeuro() {
	console.log("create");
    currentState = instructionState;
	currentState.enable();
}





    
   // this.game.stage.backgroundColor = #127898; // updates background
