/*
 * Created by hackers. Sponsored by NASA.
 * Initial "screen" loaded on startup
 */
var game = new Phaser.Game($(window).width(),$(window).height(), Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    /*game.load.image('sky', 'assets/doge_monster.jpg');
    game.load.image('ground', 'assets/doge_monster.jpg');
    game.load.image('star', 'assets/doge_monster.jpg');
    game.load.spritesheet('dude', 'assets/doge_monster.jpg', 32, 48);*/
    game.load.image('Neurotransmitter', '../Developros/assets/neurotransmitters.bmp');

}

var state;

var title;
var neuroButton;

function create() {
	
	
	var text = 'Play Games, Ace the MCAT, Save Lives';
    var style = {font: "60px Arial", fill:'#fc2b6a',align: "center"};

    title = game.add.text(0, 0, text, style);
    title.setTextBounds(0,0,$(window).width(),$(window).height());

    neuroButton = game.add.sprite(game.world.centerX, game.world.centerY, 'Neurotransmitter');

    neuroButton.inputEnabled = true;
    neuroButton.events.onInputDown.add(actionOnClick, this);
    
	

}

function update() {

}

function neurotransButtonClick(){

}
function actionOnClick(){
    //document.body.style.backgroundColor = "red";
    console.log("clicked!");
    disable();
	document.location.href = "neurotransmitter.html";	
	
	//game.visible = false;
	//game.pause();
	
	//game.destroy();
	//game.load.image('Neurotransmitter', '../Developros/assets/neurotransmitters.bmp');
	console.log("end action on click");
}


function disable(){
    title.visible = false;
	neuroButton.visible = false;
}