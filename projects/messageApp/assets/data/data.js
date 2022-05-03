module.exports = {
	data: [],

	getAll() {
		return this.data;
	},
	newData(name, msg) {
		this.data.push({ id: generateID(), name, msg });
	},
};

function generateID() {
	return Math.random().toString(36).substr(2, 9);
}
