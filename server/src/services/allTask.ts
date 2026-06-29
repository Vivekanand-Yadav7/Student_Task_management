import { prisma } from "../config/db.js";
import { Request, Response } from "express";

export const allTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = (req as any).user?.id;

        if (!id) {
            res.status(400).json({ error: "User ID is required" });
            return;
        }
        const tasks = await prisma.task.findMany({
            where: {
                userId: id
            },
            include: {
                subtitles: true
            }
        });
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}