import { prisma } from '../config/db.js';
export const markDone = async (req, res) => {
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
        const now = new Date();
        const taskDate = new Date(task.createdAt);
        const isBacklog = new Date(taskDate.setHours(0, 0, 0, 0)).getTime() < new Date(now.setHours(0, 0, 0, 0)).getTime();
        if (isBacklog) {
            const activeSlot = await prisma.activeSlot.findUnique({ where: { userId } });
            if (!activeSlot) {
                res.status(400).json({ error: 'No active slot found. You can only clear backlog tasks during a backlog slot.' });
                return;
            }
            const slot = await prisma.slot.findFirst({
                where: {
                    userId,
                    start_time: activeSlot.start_time,
                    end_time: activeSlot.end_time,
                    slot_type: 'backlog'
                }
            });
            if (!slot) {
                res.status(400).json({ error: 'Current active slot is not a backlog slot.' });
                return;
            }
        }
        else {
            const activeSlot = await prisma.activeSlot.findUnique({ where: { userId } });
            if (!activeSlot) {
                res.status(400).json({ error: 'No active slot found. You can only complete new tasks during a new_task slot.' });
                return;
            }
            const slot = await prisma.slot.findFirst({
                where: {
                    userId,
                    start_time: activeSlot.start_time,
                    end_time: activeSlot.end_time,
                    slot_type: 'new_task'
                }
            });
            if (!slot) {
                res.status(400).json({ error: 'Current active slot is not a new_task slot.' });
                return;
            }
        }
        await prisma.subtitle.updateMany({
            where: { taskId: id },
            data: { is_complete: true }
        });
        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                is_complete: true
            },
            include: { subtitles: true }
        });
        if (!task.is_complete) {
            await prisma.revisionTask.create({
                data: {
                    title: task.title,
                    duration_required: task.duration_required,
                    priority: task.priority,
                    originalTaskId: task.id,
                    userId: task.userId
                }
            });
        }
        res.status(200).json({
            message: 'Task marked as done successfully',
            task: updatedTask
        });
    }
    catch (error) {
        console.error('Error marking task as done:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=markdone.js.map