const express = require("express"),
	path = require("path");

const app = express(),
	server = require("http").createServer(app);

const apiRoute = require("./assets/routes/api");

const io = require("socket.io")(server);

const PORT = 2323;

app.use("/api", apiRoute);
app.use("/", express.static(path.join(__dirname, "assets")));
app.set("views", path.join(__dirname, "assets"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", (req, res) => {
	res.render("./html/login.html");
});

server.listen(PORT, () => {
	console.log("Server rodando na porta", PORT);
});
