import { Request, Response } from 'express';
import { createTask } from '../services/createTask.js';

const taskController = async (req: Request, res: Response): Promise<void> => {
    await createTask(req, res);
};

export default taskController;