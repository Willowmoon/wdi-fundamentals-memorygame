//console.log("Up and Running!");
//let cardOne = "queen";
//let cardTwo = "queen";
//let cardThree = "king";
//let cardFour = "king";
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);
//alert('Hello, friends.');
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} 
	else {
 	 	console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(2);