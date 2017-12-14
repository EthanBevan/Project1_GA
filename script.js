/*
//Tic Tac Toe


// Winner
var Actualboard = ['topLeft', 'middleLeft', 'bottomLeft', 'topMiddle', 'middleMiddle', 'bottomMiddle', 'topRight', 'middleRight','bottomRight'];

var results = [ 
{
winOne: ('topLeft', 'middleLeft', 'bottomLeft')
},
{
winTwo: ('topMiddle', 'middleMiddle', 'bottomMiddle')
}
];
*/
/*
var topLeft = document.querySelector('.topLeft')

var style = document.querySelector('.style')

.topleft === .backgroundImageBoardOne
*/


//var backgroundImage = 'url(https://78.media.tumblr.com/avatar_638fea9e3ede_128.png)'

/*
if (topLeft === style) {
	 alert('Winner')
}
*/
// cant compare string and dom object. So I have to
// go to proerties and compare the same thing. 











//have a resuts array
// check if baord 1,2,3 all have same background url. (as in all Xs)
// therefore win. 



//!!!!!!!!!!!!!!
//var winner = //3 in a row. index 3.
// if 3 ps next to eachother have style on it then winner
/*
Mario win
Luigi win
Board is full and draw.

possible indexes for a win:

In a row down.
topLeft
middleLeft
bottomLeft

topMiddle
middleMiddle
bottomMiddle

topRight
middleRight
bottomRight

In a row across
topLeft
topMiddle
topRight

middleLeft
middleMiddle
middleRight

bottomLeft
bottomMiddle
bottomRight

Diagonal:
topLeft
middleMiddle
bottomRight

topRight
middleMiddle
bottomLeft


*/
































//Bottom










//Start 2nd version

//Select all p elements in board, so get every individual p.
var board = document.querySelectorAll('.board p');

// start with player 1
var playerOnesTurn = true;


//print X on event click
function playerChange (event) {
	// change player
	playerOnesTurn = !playerOnesTurn 

	//playerOnesTurn = counter++;

	if (playerOnesTurn === true) {
		event.target.style.backgroundImage = 'url(https://78.media.tumblr.com/avatar_638fea9e3ede_128.png)' 
	} else {
	 	event.target.style.backgroundImage = 'url(https://www.mariowiki.com/images/d/d9/MK8_Mario_Icon.png)'
	}

}


//clicked on any index it will print X
for (i = 0; i<9; i++) {
	board[i].addEventListener('click', playerChange)
}



























