const database = require("../database");
const helper = require("../helper");

/**
	* @param {string} username 
	* @param {string} password unhashed password
	* @param {string} email
*/
module.exports.createUser = async (username, password, email) => {
	const passwordHash = await helper.hashString(password);

	const users = database.execute("select count(`id`) from `users` where `username`=? or `email`=?;", [username, email])[0][0];

	if(Boolean(users["count(`id`)"])){
		throw new Error("User already exists");
	}

	database.execute("insert into `users` (`username`, `password`, `email`) values (?,?,?);", [username, passwordHash, email]);
}


/*
	* @param {string} userOrEmail username or email of user
	* @param {string} password unhashed password
	* @returns {boolean}
*/
module.exports.authenticateUser = async (userOrEmail, password) => {
	const passwordHash = await helper.hashString(password);

	const users = database.execute("select count(`id`) from `users` where (`username`=? or `email`=?) and `password`=?;", [userOrEmail, userOrEmail, passwordHash])[0][0];

	return Boolean(users["count(`id`)"]);
}

/*
	* @param {string} username
*/
module.exports.deleteUser = async (username) => {
	database.execute("delete from `users` where `username`=?;", [username]);
}
