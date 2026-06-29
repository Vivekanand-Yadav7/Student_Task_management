import { createTask } from '../services/createTask.js';
const taskController = async (req, res) => {
    await createTask(req, res);
};
export default taskController;
//# sourceMappingURL=task.js.map