import { Response } from 'express';
import { prisma } from '../config/db.js';
import { AuthRequest } from '../middleware/authCheck.js';

export const createTask = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { title, subtitle, duration_required } = req.body;
        
        // Ensure user is attached from authCheck middleware
        if (!req.user || typeof req.user === 'string') {
             res.status(401).json({ error: 'Unauthorized' });
             return;
        }

        const userId = req.user.id;

        if (!title || typeof duration_required !== 'number') {
            res.status(400).json({ error: 'Title and duration_required are required' });
            return;
        }

        const task = await prisma.task.create({
            data: {
                title,
                subtitle: subtitle || [], // Array of strings
                duration_required,
                userId
            }
        });

        res.status(201).json({
            message: 'Task created successfully',
            task
        });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
