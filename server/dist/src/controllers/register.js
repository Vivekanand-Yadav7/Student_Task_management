import registerUser from '../services/registerUser.js';
const register = async (req, res) => {
    // The service handles try/catch and sends the response
    await registerUser(req, res);
};
export default register;
//# sourceMappingURL=register.js.map