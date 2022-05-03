//Guardar User
function yUser() {
	let user = document.getElementById("user");
	// validar usuario
	valUser(user);
}

//Validar user
function valUser(user) {
	if (user.value) {
		window.location.assign("../html/chat.html");
		document.querySelector(".user-error").classList.add("hidden");
	} else {
		document.querySelector(".user-error").classList.remove("hidden");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	updateMsg();
});
//mostrar msg no site
function updateMsg() {
	fetch("http://192.168.0.100:2323/api/all")
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			let msgElements = "";

			let msg = JSON.parse(json);
			msg.forEach((m) => {
				let mElement = `<p><span style="color: #ff3739; font-size: .8em; font-weight: bold; text-transform: uppercase;">${m.name}</span> <br> ${m.msg}</p>`;

				msgElements += mElement;
			});
			document.getElementById("msg").innerHTML = msgElements;
			document.getElementById("texto").focus();
			document.getElementById("texto").value = "";
			document
				.getElementById("msg")
				.scroll(0, document.getElementById("msg").scrollHeight);
		});
}

function newMsg() {
	let texto = document.getElementById("texto").value;

	let data = {
		msg: texto,
	};

	const options = {
		method: "POST",
		headers: new Headers({ "content-type": "application/json" }),
		body: JSON.stringify(data),
	};

	fetch("http://192.168.0.100:2323/api/new", options).then((res) => {
		updateMsg();
	});
}
