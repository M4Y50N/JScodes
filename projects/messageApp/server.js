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
	//Envia ao usuario atual
	socket.emit("message", "Bem vindo ao Chat!");

	console.log(socket);
	socket.on("ChatMessage", () => {});
});

server.listen(PORT, () => {
	console.log("Server running in port", PORT);
});
