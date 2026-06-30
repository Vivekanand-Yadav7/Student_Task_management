import { prisma } from "../config/db.js";
const subComplete = async (req, res) => {
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
        const task = await prisma.task.findUnique({ where: { id } });
        if (!task) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        const now = new Date();
        const taskDate = new Date(task.createdAt);
        const isBacklog = new Date(taskDate.setHours(0, 0, 0, 0)).getTime() < new Date(now.setHours(0, 0, 0, 0)).getTime();
        if (isBacklog) {
            const userId = req.user?.id;
            if (userId) {
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
        }
        else {
            const userId = req.user?.id;
            if (userId) {
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
        }
        const wasComplete = task.is_complete;
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
        if (isComplete && !wasComplete) {
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
        res.status(200).json(updatedTask);
    }
    catch (error) {
        console.error('Error marking subtitle as done:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
export default subComplete;
//# sourceMappingURL=subtitlecomplete.js.map