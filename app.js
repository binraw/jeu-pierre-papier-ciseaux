const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let resultat;
possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener("click", (e) => {
		userChoice = e.target.id;
		userChoiceDisplay.innerHTML = userChoice;
		generateComputerChoice();
		getResult();
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
