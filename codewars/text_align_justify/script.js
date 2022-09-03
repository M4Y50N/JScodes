function justify(text, width) {
	if (text.length <= width) {
		return text;
	} else {
		let new_str = "";
		for (let i = 1; Math.floor(text.length / width) >= i; i++) {
			new_str += text.slice(0, width) + "\n";
		}
		new_str += text.slice(width, text.length);
		return new_str;
	}
}

console.log(justify("may so n ret qweq ", 7));
