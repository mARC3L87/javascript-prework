function getMoveName(argMoveId){
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

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
} */

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/* if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} */

printMessage('Twój ruch to: ' + playerMove);

function displayResult (argComputerMove, argPlayerMove) {

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
			return 'Ty wygrywa';
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
			return 'Remis';
		} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
			return 'Ty wygrywa';
		} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
			return 'Komputer wygrywa';
		} else if (argPlayerMove == 'nieznany ruch') {
			return 'Endgame';
		} 
	}
	printMessage('Wynik: ' + displayResult(computerMove, playerMove));
	

/* if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Ty wygrywasz');
} else if (computerMove == 'papier' && playerMove =='kamień'){
	printMessage('Komputer wygrywa');
} else if (computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis');
} else if (computerMove == 'kamień' && playerMove =='kamień'){
	printMessage('Remis');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Komputer wygrywa');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Ty wygrywasz');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Ty wygrywasz');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Komputer wygrywa');
}

if(playerMove == 'nieznany ruch' && computerMove == 'papier'){
	printMessage('Endgame');
} else if (playerMove == 'nieznany ruch' && computerMove == 'kamień'){
	printMessage('Endgame');
} else if (playerMove == 'nieznany ruch' && computerMove == 'nożyce'){
	printMessage('Endgame');
} */