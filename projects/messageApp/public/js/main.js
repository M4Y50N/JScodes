const chatForm = document.getElementById("chat-form");
const socket = io();

socket.on("message", (message) => {
	console.log(message);
});

//Envio de Mensagem
chatForm.addEventListener("submit", (e) => {
	e.preventDefault();

	//input do formulario
	const msg = e.target.elements.message_area.value;

	//emitir um listener ao servidor
	socket.emit("chatMessage", msg);
});
