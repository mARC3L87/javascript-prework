{
	const playGame = function(playerInput){
	
		clearMessages();

		const getMoveName = function(argMoveId){
			if(argMoveId == 1){
				return 'kamień';
			}
			if(argMoveId == 2){
				return 'papier';
			}
			if(argMoveId == 3){
				return 'nożyce';
			}

			printMessage('Nie znam ruchu o id ' + argMoveId + ' ');
				return 'nieznany ruch';
		}

		
		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);
			

		const computerMove = getMoveName(randomNumber);

		printMessage('Mój ruch to: ' + computerMove);



		console.log('Gracz wpisał: ' + playerInput);

		const playerMove = getMoveName(playerInput);

		printMessage('Twój ruch to: ' + playerMove);

		const displayResult = function(argComputerMove, argPlayerMove) {

			if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
				return 'Ty wygrywasz';
			} else if (argComputerMove == 'papier' && argPlayerMove =='kamień') {
				return 'Komputer wygrywa';
			} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
	   			return 'Remis';
			} else if (argComputerMove == 'kamień' && argPlayerMove =='kamień') {
				return 'Remis';
			} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
				return 'Komputer wygrywa';
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
				return 'Ty wygrywasz';
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
				return 'Remis';
			} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
				return 'Ty wygrywasz';
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
				return 'Komputer wygrywa';
			} else if (argPlayerMove == 'nieznany ruch') {
				return 'Endgame';
			} 
		}
			printMessage('Wynik: ' + displayResult(computerMove, playerMove));
	}



	document.getElementById('play-rock').addEventListener('click', function(){
		playGame(1);
	});

	document.getElementById('play-paper').addEventListener('click', function(){
		playGame(2);
	});

	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame(3);
	});

}