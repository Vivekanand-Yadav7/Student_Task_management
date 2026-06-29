import { Request, Response } from 'express';
import { prisma } from '../config/db.js';

// ── helpers ──────────────────────────────────────────────────────────────────
const getUserId = (req: Request): string | null => {
    // @ts-ignore
    return req.user?.id ?? null;
};

// ── CREATE ────────────────────────────────────────────────────────────────────
// POST /api/revision-tasks
// Body: { title, duration_required, priority?, date?, originalTaskId? }
export const createRevisionTask = async (req: Request, res: Response) => {
    try {
        const userId = getUserId(req);
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const { title, duration_required, priority, date, originalTaskId } = req.body;

        if (!title || typeof duration_required !== 'number') {
            return res.status(400).json({ error: 'title and duration_required are required' });
        }

        const data: any = { title, duration_required, userId };
        if (priority)        data.priority        = priority;
        if (date)            data.date            = new Date(date);
        if (originalTaskId)  data.originalTaskId  = originalTaskId;

        const task = await prisma.revisionTask.create({ data });
        return res.status(201).json(task);
    } catch (err) {
        console.error('Error creating revision task:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// ── GET ALL (with optional date filter) ───────────────────────────────────────
// GET /api/revision-tasks?date=YYYY-MM-DD
// If `date` query param provided, returns only tasks whose `date` field falls
// on that calendar day (UTC). Otherwise returns all tasks for the user.
export const getRevisionTasks = async (req: Request, res: Response) => {
    try {
        const userId = getUserId(req);
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const { date } = req.query;
        const where: any = { userId };

        if (date && typeof date === 'string') {
            const start = new Date(date);
            start.setUTCHours(0, 0, 0, 0);
            const end = new Date(date);
            end.setUTCHours(23, 59, 59, 999);
            where.date = { gte: start, lte: end };
        }

        const tasks = await prisma.revisionTask.findMany({
            where,
            orderBy: { date: 'desc' },
            include: { originalTask: { select: { id: true, title: true } } }
        });

        return res.status(200).json(tasks);
    } catch (err) {
        console.error('Error fetching revision tasks:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// ── MARK COMPLETE ─────────────────────────────────────────────────────────────
// POST /api/revision-tasks/:id/complete
export const completeRevisionTask = async (req: Request, res: Response) => {
    try {
        const userId = getUserId(req);
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const id = req.params.id as string;
        const existing = await prisma.revisionTask.findFirst({ where: { id, userId } });
        if (!existing) return res.status(404).json({ error: 'Revision task not found' });

        // Check if there is an active revision slot
        const activeSlot = await prisma.activeSlot.findUnique({ where: { userId } });
        if (!activeSlot) {
            return res.status(400).json({ error: 'No active slot found. You can only revise tasks during a revision slot.' });
        }

        const slot = await prisma.slot.findFirst({
            where: {
                userId,
                start_time: activeSlot.start_time,
                end_time: activeSlot.end_time,
                slot_type: 'revision'
            }
        });

        if (!slot) {
            return res.status(400).json({ error: 'Current active slot is not a revision slot.' });
        }

        const task = await prisma.revisionTask.update({
            where: { id },
            data: { 
                is_complete: true,
                revision_frequency: { increment: 1 }
            }
        });
        return res.status(200).json(task);
    } catch (err) {
        console.error('Error completing revision task:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

// ── DELETE ────────────────────────────────────────────────────────────────────
// DELETE /api/revision-tasks/:id
export const deleteRevisionTask = async (req: Request, res: Response) => {
    try {
        const userId = getUserId(req);
        if (!userId) return res.status(401).json({ error: 'Unauthorized' });

        const id = req.params.id as string;
        const existing = await prisma.revisionTask.findFirst({ where: { id, userId } });
        if (!existing) return res.status(404).json({ error: 'Revision task not found' });

        await prisma.revisionTask.delete({ where: { id } });
        return res.status(200).json({ message: 'Revision task deleted' });
    } catch (err) {
        console.error('Error deleting revision task:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
