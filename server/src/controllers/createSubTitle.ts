import { Request, Response } from 'express';
import { createSubTitle } from '../services/createSubTitle.js';

const createSubTitleController = async (req: Request, res: Response): Promise<void> => {
    await createSubTitle(req, res);
};

export default createSubTitleController;
