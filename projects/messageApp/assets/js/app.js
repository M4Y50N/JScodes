const CAIXAMESSAGEM = document.getElementById("msg");

function enviarMsg() {
	let texto = document.getElementById("texto");

	if (texto.value) {
		CAIXAMESSAGEM.innerHTML += `<p>${texto.value}</p>`;
		texto.value = "";
		texto.focus();
	} else texto.focus();
}

//Guardar User
function yUser() {
	let user = document.getElementById("user");
	if (user.value) {
		window.location.assign("./assets/html/chat.html");
		document.querySelector(".user-error").classList.add("hidden");
	} else {
		document.querySelector(".user-error").classList.remove("hidden");
	}
}
