import { Request, Response } from 'express';
import { prisma } from '../config/db.js';

export const createSlot = async (req: Request, res: Response) => {
    try {
        const { slot_type, start_time, end_time } = req.body;
        // @ts-ignore - Assuming authMiddleware attaches user
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const slot = await prisma.slot.create({
            data: {
                slot_type,
                start_time,
                end_time,
                userId
            }
        });

        return res.status(201).json(slot);
    } catch (error) {
        console.error('Error creating slot:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const getSlots = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const slots = await prisma.slot.findMany({
            where: { userId },
            orderBy: { start_time: 'asc' }
        });

        return res.status(200).json(slots);
    } catch (error) {
        console.error('Error fetching slots:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateSlot = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const { slot_type, start_time, end_time } = req.body;
        // @ts-ignore
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const existingSlot = await prisma.slot.findFirst({
            where: { id, userId }
        });

        if (!existingSlot) {
            return res.status(404).json({ error: 'Slot not found' });
        }

        const slot = await prisma.slot.update({
            where: { id },
            data: {
                slot_type: slot_type ?? existingSlot.slot_type,
                start_time: start_time ?? existingSlot.start_time,
                end_time: end_time ?? existingSlot.end_time
            }
        });

        return res.status(200).json(slot);
    } catch (error) {
        console.error('Error updating slot:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteSlot = async (req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        // @ts-ignore
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const existingSlot = await prisma.slot.findFirst({
            where: { id, userId }
        });

        if (!existingSlot) {
            return res.status(404).json({ error: 'Slot not found' });
        }

        await prisma.slot.delete({
            where: { id }
        });

        return res.status(200).json({ message: 'Slot deleted successfully' });
    } catch (error) {
        console.error('Error deleting slot:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const getActiveSlot = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const activeSlot = await prisma.activeSlot.findUnique({
            where: { userId }
        });

        return res.status(200).json(activeSlot);
    } catch (error) {
        console.error('Error fetching active slot:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const setActiveSlot = async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const userId = req.user?.id;
        const { start_time, end_time } = req.body;

        if (!userId) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const activeSlot = await prisma.activeSlot.upsert({
            where: { userId },
            update: { start_time, end_time },
            create: { start_time, end_time, userId }
        });

        return res.status(200).json(activeSlot);
    } catch (error) {
        console.error('Error setting active slot:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
