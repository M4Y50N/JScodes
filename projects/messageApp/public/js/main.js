const chatForm = document.getElementById("chat-form");
const socket = io();

const { username } = Qs.parse(location.search, {
	ignoreQueryPrefix: true,
});

const chatMessage = document.querySelector(".chat-messages");
const userList = document.querySelector(".user-container");

//User join
socket.emit("joinUser", username);

//Get users
socket.on("roomUsers", (user) => {
	outputUsers(user);
});

//message from server
socket.on("message", (message) => {
	outputMessage(message);

	//scroll down
	chatMessage.scrollTop = chatMessage.scrollHeight;
});

//Envio de Mensagem
chatForm.addEventListener("submit", (e) => {
	e.preventDefault();

	//input do formulario
	const msg = e.target.elements.message_area.value;

	//emitir um listener ao servidor
	socket.emit("chatMessage", msg);
});

//output message to DOM
function outputMessage(message) {
	const div = document.createElement("div");
	div.classList.add("message");
	div.innerHTML = `
    <p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
        ${message.text}
    </p>
`;
	document.querySelector(".chat-messages").appendChild(div);
}

//Username to DOM
function outputUsers(user) {
	userList.innerHTML += `<p>${user.username}</p>`;
}
