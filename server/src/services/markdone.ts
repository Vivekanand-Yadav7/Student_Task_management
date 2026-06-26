import { Response } from 'express';
import { prisma } from '../config/db.js';
import { AuthRequest } from '../middleware/authCheck.js';

export const markDone = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.query;

        if (!req.user || typeof req.user === 'string') {
             res.status(401).json({ error: 'Unauthorized' });
             return;
        }

        const userId = req.user.id;

        if (!id || typeof id !== 'string') {
            res.status(400).json({ error: 'Task ID is required in query parameters' });
            return;
        }

        const task = await prisma.task.findUnique({
            where: { id }
        });

        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }

        if (task.userId !== userId) {
            res.status(403).json({ error: 'Forbidden: Task does not belong to user' });
            return;
        }

        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                is_complete: true,
                completed_subtitle_count: task.subtitle.length
            }
        });

        res.status(200).json({
            message: 'Task marked as done successfully',
            task: updatedTask
        });
    } catch (error) {
        console.error('Error marking task as done:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
