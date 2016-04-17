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
	game.load.image('doge','../Developros/assets/doge_monster.jpg');
}
var sprite1;
var sprite2;

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	sprite1 = game.add.sprite(300,0,'doge',2);
	sprite2 = game.add.sprite(300,400,'doge',2);

	game.physics.arcade.enable([sprite1,sprite2]);
	game.physics.arcade.gravity.y = 200;

	sprite1.body.bounce.y = .95;
	sprite1.body.collideWorldsBounce = true;

	sprite2.body.allowGravity = false;
	sprite2.body.immovable = true;

	game.input.onDown.add(toggleBody,this);

}
function toggleBody(){
	if(sprite2.body.enable){
		sprite2.body.enable = false
	}
	else{
		sprite2.body.enable = true;
	}
}

function tick(){
	game.debug.text('Click to disable',32,32);
	return "PLAYSTATE";
}