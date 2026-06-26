import { Request, Response } from 'express';
import { markDone } from '../services/markdone.js';
import { AuthRequest } from '../middleware/authCheck.js';

const taskdoneController = async (req: Request, res: Response): Promise<void> => {
    await markDone(req as AuthRequest, res);
};

export default taskdoneController;
