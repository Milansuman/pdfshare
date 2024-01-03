const crypto = require("node:crypto");
const process = require("node:process");

/**
 * @param {string} input Plaintext string to hash 
 * @returns {Promise<string>} Hashed string
 */
module.exports.hashString = async (input) => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(input, process.env.SALT, 1000, 16, 'sha512', (err, key) => {
            if(err) reject(err);
            resolve(key.toString("hex"))
        });
    })
}