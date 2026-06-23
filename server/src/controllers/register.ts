import { Request, Response } from 'express';
import registerUser from '../services/registerUser.js';

const register = async (req: Request, res: Response): Promise<void> => {
    // The service handles try/catch and sends the response
    await registerUser(req, res);
};

export default register;
