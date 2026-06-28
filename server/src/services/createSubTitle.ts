import { Response } from 'express';
import { prisma } from "../config/db.js";
import { AuthRequest } from '../middleware/authCheck.js';

export const createSubTitle = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { taskId, title } = req.body;

        if (!taskId || !title) {
            res.status(400).json({ error: 'taskId and title are required' });
            return;
        }

        const subtitle = await prisma.subtitle.create({
            data: {
                title,
                taskId
            }
        });

        res.status(201).json({
            message: 'Subtitle created successfully',
            subtitle
        });
    } catch (error) {
        console.error('Error creating subtitle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
