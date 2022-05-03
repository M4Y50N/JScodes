const express = require("express"),
	bodyParser = require("body-parser"),
	cors = require("cors"),
	router = express.Router();

const dados = require("../data/data");

router.use(cors());

router.get("/all", (req, res) => {
	res.json(JSON.stringify(dados.getAll()));
});

router.post("/new", bodyParser.json(), (req, res) => {
	let name = req.body.name;
	let msg = req.body.msg;

	dados.newData(name, msg);

	res.send("Post adicionado");
});

module.exports = router;
