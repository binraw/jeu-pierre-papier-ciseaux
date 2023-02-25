const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const campComputer = document.querySelector(".computer-camp");
const campUser = document.querySelector(".user-camp");
const backResult = document.querySelector(".selection-camp");
let userChoice;
let computerChoice;
let resultat;

possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener("click", (e) => {
		userChoice = e.target.id;
		userChoiceDisplay.innerHTML = userChoice;
		generateComputerChoice();
		changeBackMachine();
		changeBackHumain();
		getResult();
		changeBackResult();
	})
);

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	if (randomNumber === 1) {
		computerChoice = "Pierre";
	}

	if (randomNumber === 2) {
		computerChoice = "Papier";
	}

	if (randomNumber === 3) {
		computerChoice = "Ciseau";
	}
	computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
	if (computerChoice === userChoice) {
		resultat = "C'est une egalité";
	}
	if (computerChoice === "Pierre" && userChoice === "Papier") {
		resultat = "Tu Gagnes";
	}
	if (computerChoice === "Papier" && userChoice === "Pierre") {
		resultat = "Tu Perds";
	}

	if (computerChoice === "Papier" && userChoice === "Ciseau") {
		resultat = "Tu Gagnes";
	}
	if (computerChoice === "Pierre" && userChoice === "Ciseau") {
		resultat = "Tu Perds";
	}
	if (computerChoice === "Ciseau" && userChoice === "Papier") {
		resultat = "Tu Perds";
	}
	if (computerChoice === "Ciseau" && userChoice === "Pierre") {
		resultat = "Tu Gagnes";
	}
	resultDisplay.innerHTML = resultat;
}

function changeBackResult() {
	if (resultat == "Tu Gagnes") {
		backResult.style.backgroundImage = "url(images/feux-artifice.jpg)";
		console.log("changement back");
	} else if (resultat == "C'est une egalité") {
		backResult.style.backgroundImage = "url(images/terre-image-neutre.png)";
	} else {
		backResult.style.backgroundImage = "url(images/explosion-terre.jpg)";
		console.log("pas de changement");
	}
}

function changeBackHumain() {
	if (userChoice == "Ciseau") {
		campUser.style.backgroundImage = "url(images/ciseaux.jpg)";
	}
	if (userChoice == "Pierre") {
		campUser.style.backgroundImage = "url(images/pierre-steatite.jpg)";
	}
	if (userChoice == "Papier") {
		campUser.style.backgroundImage = "url(images/feuille.jfif)";
	}
}
function changeBackMachine() {
	if (computerChoice == "Ciseau") {
		campComputer.style.backgroundImage = "url(images/ciseaux.jpg)";
	}
	if (computerChoice == "Pierre") {
		campComputer.style.backgroundImage = "url(images/pierre-steatite.jpg)";
	}
	if (computerChoice == "Papier") {
		campComputer.style.backgroundImage = "url(images/feuille.jfif)";
	}
}
