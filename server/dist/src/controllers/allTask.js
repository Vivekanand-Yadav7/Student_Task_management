import { allTasks } from "../services/allTask.js";
const allTaskController = async (req, res) => {
    await allTasks(req, res);
};
export default allTaskController;
//# sourceMappingURL=allTask.js.map