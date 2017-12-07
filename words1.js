var Letter = require("./letters.js");

module.exports = function Word(word){

	var letters = [];
	var wordArray = word.split('');
//forEach

	wordArray.forEach(function(l){
		letters.push(new Letter(l));
		});

	this.gRemaining = 10;
	this.guessed= false;
	//this.guesses =0;
//EL PROBLEMOOOOOO
	this.letterInWord = function(userGuess){
		this.gRemaining--;

		this.guessed = letters.every(function(letter){
			if(userGuess === letter.name){
				letter.guessed = true;
				//this.guesses++;
			}
			return letter.guessed;
			//this.guesses++;
		});
	}

	this.display = function(){
		var string = '';
		letters.forEach(function(letter){
			string += letter.display();
		});
		console.log("        "+ string+ "\nGuesses Left: " + this.gRemaining );
	}
}

//module.exports = Word;