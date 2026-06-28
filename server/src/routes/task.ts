import { Router } from 'express';
import taskController from '../controllers/task.js';
import taskdoneController from '../controllers/taskdone.js';
import { authCheck } from '../middleware/authCheck.js';
import allTaskController from '../controllers/allTask.js';
import subTitleCompleteController from '../controllers/subTitileComplete.js';
import createSubTitleController from '../controllers/createSubTitle.js';
const router = Router();

router.post('/create', authCheck, taskController);
router.post('/done', authCheck, taskdoneController);
router.get('/all', authCheck, allTaskController);
router.post('/subtitlecomplete', authCheck, subTitleCompleteController);
router.post('/subtitle/create', authCheck, createSubTitleController);
export default router;