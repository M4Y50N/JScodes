//Guardar User
function yUser() {
	let user = document.getElementById("user");
	// validar usuario
	valUser(user);
}

//Validar user
function valUser(user) {
	if (user.value) {
		window.location.href = "../html/chat.html";

		document.querySelector(".user-error").classList.add("hidden");
	} else {
		document.querySelector(".user-error").classList.remove("hidden");
	}
}
