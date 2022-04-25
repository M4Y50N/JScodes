const CAIXAMESSAGEM = document.getElementById("msg");

function enviarMsg() {
	let texto = document.getElementById("texto");

	CAIXAMESSAGEM.innerHTML += `<p>${texto.value}</p>`;
	texto.value = "";
	texto.focus();
}
