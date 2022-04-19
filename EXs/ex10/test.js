requirejs(["fs", "./fs.js"], function ($, fs) {
	let files = require("fs");

	files.readFile("text.txt", "utf8", (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(data);
	});
});
