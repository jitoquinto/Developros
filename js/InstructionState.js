/*
    This is the screen that starts the nueruotrasnmitter game
    Made with love. For you. 
*/

var InstructionState = function(phGame) {
    this.name = "INSTRUCTIONSTATE";
    this.game = phGame;

    //this.game.load.image();

}

InstructionState.prototype = Object.create(GameState.prototype);


function preload(){
	
}