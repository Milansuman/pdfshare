const crypto = require("crypto");
const process = require("process");

/** 
	* Uses pbkdf2 with sha512 to hash the string
	* @param {string} str String to hash
	* @returns {Promise<string>} Hex representation of hashed string
*/
module.exports.hashString = (str) => {
	return new Promise((resolve, reject) => {
		crypto.pbkdf2(str, process.env.SALT, 100000, 64, "sha512", (err, key) => {
			if(err) reject(err);
			resolve(key.toString("hex"));
		})
	})
}
