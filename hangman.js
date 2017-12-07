var inquirer = require("inquirer");
var prompt = require("prompt");
var words = require("./words.js")
//var words1 = require("./words1.js")






console.log("-----------------------"+"\nWelcome to Renee's Hangman. Its a simple game"+ "\nGuess the correct letters, you win." + "\nGuess the wrong letters....." + "\nThen you lose."+"\n-----------------------");
Start();


function Start(){
	var word = words.getWord();
	word.display();
	UserGuess(word);
}

function UserGuess(word){
	inquirer.prompt([
		{
			name: "ltr",
			type: "input",
			message: "What letter would you like to guess?",
			//pattern: /[a-zA-Z]/
			//validate : function(input){
				//return input.trim().toUpperCase();
			//}
		}
		]).then(function(guess){
		word.letterInWord(guess.ltr.toLowerCase());
		word.display();

		if (!word.guessed){
			if(word.gRemaining > 0){
				UserGuess(word);
			}else{
				console.log("You lose");
				again();
			}
		}else if(word.guessed){
			console.log("Wow! Im impressed");
			again();
		}
	});
}




var again = function(){
	inquirer.prompt([
	{
		type: "confirm",
		message: "Want to play again?",
		name: "pAgain"
	}
	]).then(function(ans){
		if(ans.pAgain){
			Start();
				}else{
					console.log("Thanks for playing, come again soon!")
				}
			
		
		});
};









/*


var Game = function(){
	var words = ["criminal", "strange", "butterfly", "hippopotamus", "elephant", "purple", "poop", "advanced"];
	var lives= 0,
	var currentWrd = null,

	function startGame(wrd){
		this.resetLives();
		this.currentWrd = new Word(this.wordList[Math.floor(Math.random)+ this.words.length]);
		this.currentWrd.getltr();
		this.prompIt();
	}
	var resetLives = function(){
		this.lives = 0;
	},

	var promptIt = function(){

	}


}

var Guess = function(){
	if (lives <= 5){
		inquirier.prompt([
		{
			name: "guess",
			type: "input",
			message: "What letter would you like to guess?"
		}]).then(function(ltrGuess){

		})
	}
}
















/*
function hangMan(word, guessedLtrs, validLtrs, attempts){
	this.word = word.toUpperCase();
	this.guessedLtrs = guessedLtrs;
	this.validLtrs = validLtrs;
	this.attempts = attempts;
}

hangMan.prototype.printInfo = function(){
	console.log(this.word + "\n" + "\nGuessed: "+ guessedLtrs)
};

var lives = 0;

var game = function(){
	if (lives < 5) {
		inquirer.prompt([
		{
			type: "input",
			name: "guess",
			message: "What letter would you like to guess?"
			validate:function(value){
				if(value.length === 1 && isNan(value)){
					return true;
				}return false;
			}

		}]).then(function(ans){
			
		})
	}
}*/