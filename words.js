var Word = require("./words1.js")

module.exports.getWord = function(){
	var list = ["criminal", "strange", "butterfly", "hippopotamus", "elephant", "purple", "poop", "advanced"];


	var randm = list[Math.floor(Math.random() * list.length)]
	
	var word = new Word(randm);
	return word;
}



/*
//var words = ["criminal", "strange", "butterfly", "hippopotamus", "elephant", "purple", "poop", "advanced"];
var letter = require("/letter.js")

function Word(wrd){
	this.wrd = wrd;
	this.let = [];
	this.found = false;
//get letter function
	this.getLet = function(){
		for(var i=0; i <this.wrd.length; i++ ){
			this.let.push(new Letter(this.wrd[i]));
		}
	};

	this.findWord = function(){
		this,found = this.lets.every(function(currentLetter){
			return currentLetter.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLtr){
		var guesses = 0;

		for (var i = 0; i < this.let.length; i++){
			this.let[i].appear = true;
			guesses++
		}
	}
		return guesses++
};

this.wordRender = function() {
	var string= "";
	for(var i = 0; i < this.let.length; i++){
		string += this.let[i].letterRender();
	}
	return string;
};
}
module.exports = Word;

/*
var Word = function(wrds){
	this.letterArr = [];
	this.holderArr = [];
	this.currentWrd = wrds.toUpperCase();
	this.wordsArray = function(){
		this.forEach(function(l){
			var letter = new ltr(l);
			this.letterArr.push(letter.ltr);
			this.holderArr.push(letter.placeHolder);
		}.bind(this));
	}
}





module.exports[Word];*/
