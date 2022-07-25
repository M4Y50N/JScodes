const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");
//dasdas
function movePoint() {
	var data = new Date();

	var hr = data.getHours(),
		min = data.getMinutes(),
		seg = data.getSeconds();

	var segundosPos = (seg * 360) / 60,
		minutosPos = (min * 360) / 60 + segundosPos / 60 / 60,
		horaPos = (hr * 360) / 12 + minutosPos / 60 / 12;

	PONTEIROHORA.style.transform = `rotate(${horaPos}deg)`;
	PONTEIROMINUTO.style.transform = `rotate(${minutosPos}deg)`;
	PONTEIROSEGUNDO.style.transform = `rotate(${segundosPos}deg)`;
}

setInterval(movePoint, 1000);
