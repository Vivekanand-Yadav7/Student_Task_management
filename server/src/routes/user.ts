import { Router } from 'express';
import register from '../controllers/register.js';

const router: Router = Router();

router.post('/register', register);

export default router;
