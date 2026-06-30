import { Request, Response } from 'express';
import googleAuthService from '../services/googleAuthService.js';

const googleAuth = async (req: Request, res: Response): Promise<void> => {
    await googleAuthService(req, res);
};

export default googleAuth;
