const express = require("express"),
	app = express();

const path = require("path");
const http = require("http");
const server = http.createServer(app);

const socketio = require("socket.io"),
	io = socketio(server);

const PORT = 3000 || process.env.PORT;

const posts = require("./data/posts");

const cors = require("cors");

//user cors
app.use(cors());

//Usar arquivos staticos
app.use(express.static(path.join(__dirname, "public")));

//Vai rodar quando alguém entrar na pagina de mural
io.on("connection", (socket) => {
	socket.on("newPost", (post) => {
		posts.push(post);
	});
});

io.emit("update", posts);

server.listen(PORT, () => {
	console.log("Server rodando na porta ", PORT);
});
