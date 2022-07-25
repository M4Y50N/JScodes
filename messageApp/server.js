const path = require("path");
const http = require("http");
const express = require("express");

const formatMessage = require("./utils/message_data");
const {
	userJoin,
	getCurrentUser,
	userLeave,
	getAllUsers,
} = require("./utils/users");

const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const cors = require("cors");

const PORT = 2323 || process.env.PORT;

//Use cors
app.use(cors());

//Use statics folders
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//Load the initial page
app.use("/", (req, res) => {
	res.render("./html/login.html");
});

const BigBot = "BigBot";

//User connects
io.on("connection", (socket) => {
	socket.on("joinUser", (username) => {
		const user = userJoin(socket.id, username);

		//Envia ao usuario atual
		socket.emit("message", formatMessage(BigBot, "Bem vindo ao Chat!"));

		//Broadcast when user connects
		socket.broadcast.emit(
			"message",
			formatMessage(BigBot, `${user.username} entrou no chat!`)
		);

		//Send users info
		io.emit("roomUsers", getAllUsers());
	});

	//Listen if a user send a message
	socket.on("chatMessage", (msg) => {
		const user = getCurrentUser(socket.id);

		io.emit("message", formatMessage(user.username, msg));
	});

	//user disconnects
	socket.on("disconnect", () => {
		const user = userLeave(socket.id);
		if (user) {
			io.emit(
				"message",
				formatMessage(BigBot, `${user.username} deixou o chat!`)
			);

			//Send users info
			io.emit("RoomUsers", () => {
				users: getCurrentUser(user.username);
			});
		}
	});
});

server.listen(PORT, () => {
	console.log("Server running in port", PORT);
});
