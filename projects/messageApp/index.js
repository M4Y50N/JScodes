const fs = require("fs"),
	http = require("http"),
	express = require("express"),
	bodyParser = require("body-parser"),
	path = require("path");

const app = express();

const PORT = 2323;

app.use("/", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
	fs.readFile("./assets/html/login.html", (err, data) => {
		if (err) {
			throw err;
		} else {
			console.log(data.toString());
		}
	});
	res.send("Arquivo na tela!");
});

app.listen(PORT, () => {
	console.log("Server Running on Port", PORT);
});
