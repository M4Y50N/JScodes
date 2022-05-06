const path = require("path");
const http = require("http");
const express = require("express");

const socketio = require("socket.io");
const { render } = require("express/lib/response");
const res = require("express/lib/response");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 2323 || process.env.PORT;

//Use statics folders
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//Load the initial page
app.use("/", (req, res) => {
	res.render("./html/login.html");
});

//User connects
io.on("connection", (socket) => {
	console.log("New ws connection");

	socket.emit("message", "Bem vindo ao Chat!");

	//Broadcast when user connects
	socket.broadcast.emit("message", "Um usuário entrou no chat!");

	//user disconnects
	socket.on("disconnect", () => {
		io.emit("message", "Um usuário deixou o chat!");
	});
});

server.listen(PORT, () => {
	console.log("Server running in port", PORT);
});
