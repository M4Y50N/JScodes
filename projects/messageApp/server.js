const express = require("express");

const app = express();

const PORT = 2323;

app.listen(PORT, () => {
	console.log("Server running in port", PORT);
});
