import { prisma } from "../config/db.js";
import { Request, Response } from "express";

const subComplete = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, subId } = req.body;
        
        if (!id || !subId) {
            res.status(400).json({ error: 'Both id (Task ID) and subId (Subtitle ID) are required' });
            return;
        }

        const subtitle = await prisma.subtitle.findUnique({ where: { id: subId } });
        if (!subtitle || subtitle.taskId !== id) {
            res.status(404).json({ error: 'Subtitle not found or does not belong to this task' });
            return;
        }

        await prisma.subtitle.update({
            where: { id: subId },
            data: { is_complete: true }
        });

        // Check if all subtitles are complete
        const allSubtitles = await prisma.subtitle.findMany({ where: { taskId: id } });
        const isComplete = allSubtitles.every(sub => sub.is_complete);

        const updatedTask = await prisma.task.update({
            where: { id },
            data: { is_complete: isComplete },
            include: { subtitles: true }
        });

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error('Error marking subtitle as done:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default subComplete;