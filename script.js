//Mario edition



var marioUrl = 'url("https://www.mariowiki.com/images/d/d9/MK8_Mario_Icon.png")'

var luigiUrl = 'url("https://78.media.tumblr.com/avatar_638fea9e3ede_128.png")' 

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
		event.target.style.backgroundImage = luigiUrl
		
	} else {
	 	event.target.style.backgroundImage = marioUrl 
	 	
	}

	x.play()
	checkWin()

}



function displayWinnerMario() {
	swal("MARIO WINS", "Play Again?", "success")
	document.querySelector('.swal-overlay').style.backgroundColor = 'rgba(255, 0, 0, 0.70)'
}

function displayWinnerLuigi() {
	swal("LUIGI WINS", "Play Again?", "success")
	document.querySelector('.swal-overlay').style.backgroundColor = 'rgba(0, 150, 0, 0.70)'
}

function checkWin() {
//top mario
	if (board[0].style.backgroundImage === marioUrl &&
		board[1].style.backgroundImage === marioUrl &&
		board[2].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
 	} else if 
 		(board[3].style.backgroundImage === marioUrl &&
		board[4].style.backgroundImage === marioUrl &&
		board[5].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
 	} else if 
 	(board[6].style.backgroundImage === marioUrl &&
		board[7].style.backgroundImage === marioUrl &&
		board[8].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
	} else if //across mario
 		(board[0].style.backgroundImage === marioUrl &&
		board[3].style.backgroundImage === marioUrl &&
		board[6].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
 	} else if 
 	(board[1].style.backgroundImage === marioUrl &&
		board[4].style.backgroundImage === marioUrl &&
		board[7].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
	}else if 
 		(board[2].style.backgroundImage === marioUrl &&
		board[5].style.backgroundImage === marioUrl &&
		board[8].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
 	} else if //diagonal mario
 	(board[0].style.backgroundImage === marioUrl &&
		board[4].style.backgroundImage === marioUrl &&
		board[8].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
	} else if 
 		(board[6].style.backgroundImage === marioUrl &&
		board[4].style.backgroundImage === marioUrl &&
		board[2].style.backgroundImage === marioUrl) {
 		displayWinnerMario()
 	}
 	//top luigi  
 	else if (board[0].style.backgroundImage === luigiUrl &&
		board[1].style.backgroundImage === luigiUrl &&
		board[2].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
 	} else if 
 		(board[3].style.backgroundImage === luigiUrl &&
		board[4].style.backgroundImage === luigiUrl &&
		board[5].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
 	} else if 
 	(board[6].style.backgroundImage === luigiUrl &&
		board[7].style.backgroundImage === luigiUrl &&
		board[8].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
	} else if //across luigi
 		(board[0].style.backgroundImage === luigiUrl &&
		board[3].style.backgroundImage === luigiUrl &&
		board[6].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
 	} else if 
 	(board[1].style.backgroundImage === luigiUrl &&
		board[4].style.backgroundImage === luigiUrl &&
		board[7].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
	}else if 
 		(board[2].style.backgroundImage === luigiUrl &&
		board[5].style.backgroundImage === luigiUrl &&
		board[8].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
 	} else if //diagonal luigi
 	(board[0].style.backgroundImage === luigiUrl &&
		board[4].style.backgroundImage === luigiUrl &&
		board[8].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
	} else if 
 		(board[6].style.backgroundImage === luigiUrl &&
		board[4].style.backgroundImage === luigiUrl &&
		board[2].style.backgroundImage === luigiUrl) {
 		displayWinnerLuigi()
 	} 
}

//clicked on any index it will print X
for (i = 0; i<9; i++) {
	board[i].addEventListener('click', playerChange)
}



























