const users = [];

//Join user to chat
function userJoin(id, username) {
	const user = { id, username };

	users.push(user);

	return user;
}

//Get current
function getCurrentUser(id) {
	return users.find((user) => {
		return user.id === id;
	});
}

//User leaves chat
function userLeave(id) {
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
}

//Get All Users
function getAllUsers() {
	return users;
}

module.exports = {
	userJoin,
	getCurrentUser,
	userLeave,
	getAllUsers,
};
