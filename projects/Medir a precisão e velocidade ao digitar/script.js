const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let timer = [0, 0, 0, 0];

// Adiciona zero inicial aos números <= 9 (apenas para estética):

// Executa um timer padrão de minuto / segundo / centésimos:
function runTimer() {
	let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
	theTimer.innerHTML = currentTime;
	timer[3]++;

	timer[0] = Math.floor(timer[3] / 100 / 60);
	timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
	timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

// Verifica se texto digitado com o fornecido na página:
function spellCheck() {
	let textEntered = testArea.value;
}

// Inicia o cronômetro:
function start() {
	let textEnteredLength = testArea.value.length;
	if (textEnteredLength === 0) {
		setInterval(runTimer, 10);
	}

	console.log(textEnteredLength);
}

// Função de recomeçar:
function reset() {
	console.log("O botão de recomeçar foi clicado.");
}

// Listeners de eventos para entrada de teclado e o botão de recomeçar:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
