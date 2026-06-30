import { Router } from 'express';
import register from '../controllers/register.js';
import login from '../controllers/login.js';
import googleAuth from '../controllers/googleAuth.js';
import allUsersController from '../controllers/allUsers.js';

const router: Router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/google-auth', googleAuth);
router.get('/all', allUsersController);

export default router;
