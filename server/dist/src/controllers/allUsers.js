import { allUsers } from "../services/allUsers.js";
const allUsersController = async (req, res) => {
    await allUsers(req, res);
};
export default allUsersController;
//# sourceMappingURL=allUsers.js.map