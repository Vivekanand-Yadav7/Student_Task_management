import { Router } from 'express';
import taskController from '../controllers/task.js';
import taskdoneController from '../controllers/taskdone.js';
import { authCheck } from '../middleware/authCheck.js';
import allTaskController from '../controllers/allTask.js';
const router = Router();

router.post('/create', authCheck, taskController);
router.post('/done', authCheck, taskdoneController);
router.get('/all', authCheck, allTaskController);
export default router;