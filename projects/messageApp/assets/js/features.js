//enviar mensagem no chat
function enviarMsg() {
	let caixaMensagem = document.getElementById("msg");
	let texto = document.getElementById("texto");

	if (texto.value) {
		caixaMensagem.innerHTML += `<p>${texto.value}</p>`;
		texto.value = "";
		texto.focus();
	} else texto.focus();
}

//Guardar User
function yUser() {
	let user = document.getElementById("user");
	// validar usuario
	valUser(user);
}

//Validar user
function valUser(user) {
	if (user.value) {
		window.location.assign("./chat.html");
		document.querySelector(".user-error").classList.add("hidden");
	} else {
		document.querySelector(".user-error").classList.remove("hidden");
	}
}
