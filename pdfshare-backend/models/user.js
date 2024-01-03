const {User} = require("../database");
const util = require("../util");

/**
 * @param {string} username 
 * @param {string} password Plaintext password
 * @returns {Promise<User> | null} User object if a user is found or null
 */
module.exports.authenticate = async (username, password) => {
    try {
        return await User.findOne({
            where: {
                username: username,
                password: await util.hashString(password)
            }
        });
    } catch (error) {
        throw error;
    }
}

/**
 * @param {string} username 
 * @param {string} password Plaintext password
 * @param {string} email 
 * @param {boolean} verify Whether to send the verification email or not. Default: true
 * @returns {Promise<User> | null}
 */
module.exports.createUser = async (username, password, email, verify=true) => {
    try {
        const user = await User.create({
            username: username,
            password: password,
            email: email
        });

        if(verify){
            //TODO: send email
        }

        return user;
    } catch (error) {
        throw error;
    }
}

/**
 * This function does not send the email.
 * @param {string} username 
 */
module.exports.verifyUser = async (username) => {
    try {
        await User.update({verfied: true}, {
            where: {
                username: username
            }
        });
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {*} username 
 */
module.exports.deleteUser = async (username) => {
    try {
        await User.destroy({
            where: {
                username: username
            }
        });
    } catch (error) {
        throw error;
    }
}