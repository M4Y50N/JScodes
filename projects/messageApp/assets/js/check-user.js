//Guardar User
function yUser() {
	let user = document.getElementById("user");
	// validar usuario
	valUser(user);
}

//Validar user e atualizar tela
function valUser(user) {
	if (user.value) {
		document.body.innerHTML = `<div class="container">
										<div id="msg ${user.value}" ></div>
										<div id="inputs">
												<input id="texto" type="text" placeholder="Digite sua mensagem" />
												<input type="button" value="Enviar" onclick="newMsg()" />
										</div>
									</div>
									<script src="../js/features.js"></script>`;

		document.querySelector(".user-error").classList.add("hidden");
	} else {
		document.querySelector(".user-error").classList.remove("hidden");
	}
}
