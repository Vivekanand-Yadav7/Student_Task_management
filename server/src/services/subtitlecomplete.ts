import { prisma } from "../config/db.js";
import { Request, Response } from "express";

const subComplete = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, subId } = req.body;
        const task = await prisma.task.findUnique({
            where: { id }
        });
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                completed_subtitle_count: task.completed_subtitle_count + 1
            }
        });
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error('Error marking subtitle as done:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default subComplete;