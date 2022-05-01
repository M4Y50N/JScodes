var fs = require("fs");

fs.readdir("./", (err, files) => {
	if (err) throw err;
	files
		.filter((x) => {
			return x.split(".")[1] == "txt";
		})
		.forEach((file, index) => {
			fs.rename(file, `NovoNome${index}.txt`, (err) => {
				if (err) throw err;
			});
		});

	console.log("Arquivos renomeados");
});
