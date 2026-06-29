import { markDone } from '../services/markdone.js';
const taskdoneController = async (req, res) => {
    await markDone(req, res);
};
export default taskdoneController;
//# sourceMappingURL=taskdone.js.map