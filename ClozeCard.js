// * This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
//   * The constructor should accept two arguments: `text` and `cloze`.
var ClozeCard = function(fullText, cloze){

	var clozePositions = getClozePosition(fullText, cloze);
	//* The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.


	//   * The constructed object should have a `partial` property that contains _only_ the partial text.
	this.partial = getPartialText(fullText, clozePositions);

	this.cloze = cloze;
	
	//   * The constructed object should have a `fullText` property that contains _only_ the full text.
	
	
	//   * The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

	function getClozePosition(fullText, cloze){
		var start = fullText.indexOf(cloze);
		console.log("\nstart: ", start);
	}


	function getPartialText(fullText, clozePositions){

	}







};
//ptototype
this.error = function(){
	console.log("Cloze deletion does _not_ appear in the input text.");
}


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

	// "George Washington"
	console.log(firstPresidentCloze.cloze); 

	// " ... was the first president of the United States.
	console.log(firstPresidentCloze.partial); 

	// "George Washington was the first president of the United States.
	console.log(firstPresidentCloze.fullText);
	//   * Use prototypes to attach these methods, wherever possible.

	// The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;