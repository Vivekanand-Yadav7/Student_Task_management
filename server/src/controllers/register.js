const registerUser = require('../services/registerUser');

const register = async (req, res) => {
    // The service is already handling the try/catch and sending the response!
    await registerUser(req, res);
}

module.exports = register;
