import loginUser from '../services/loginUser.js';
const login = async (req, res) => {
    await loginUser(req, res);
};
export default login;
//# sourceMappingURL=login.js.map