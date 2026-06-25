import { Request, Response } from 'express';
import loginUser from '../services/loginUser.js';

const login = async (req: Request, res: Response): Promise<void> => {
    await loginUser(req, res);
};

export default login;
