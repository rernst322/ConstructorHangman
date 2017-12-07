//var words = require("./words.js")l
/*var wordsArray = []

for (var i = 0; words.length > 1;  )

var letter = function(l) {
	this.character = l;
}



*/



function Letter(l){
	this.name = l;
	this.guessed = false;
}

Letter.prototype.display = function(){
		if(this.guessed === false){
		return "_";
	}else{
		return this.name;
	}
}

/*


if(this.guessed === true){
		return this.name;
	}else{
		return "_";
	}

}


/*
var Letter = function(ltr){


*/
module.exports = Letter;