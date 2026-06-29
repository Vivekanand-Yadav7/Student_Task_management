import { Router } from 'express';
import { createRevisionTask, getRevisionTasks, completeRevisionTask, deleteRevisionTask } from '../controllers/revisionTaskController.js';
import { authCheck } from '../middleware/authCheck.js';
const router = Router();
router.post('/', authCheck, createRevisionTask); // create
router.get('/', authCheck, getRevisionTasks); // list (+ ?date= filter)
router.post('/:id/complete', authCheck, completeRevisionTask); // mark done
router.delete('/:id', authCheck, deleteRevisionTask); // delete
export default router;
//# sourceMappingURL=revisionTask.js.map