import { prisma } from '../config/db.js';
export const createTask = async (req, res) => {
    try {
        const { title, duration_required, priority, slotId } = req.body;
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
        const taskData = {
            title,
            duration_required,
            userId
        };
        if (priority) {
            taskData.priority = priority;
        }
        if (slotId) {
            taskData.slotId = slotId;
        }
        const task = await prisma.task.create({
            data: taskData
        });
        res.status(201).json({
            message: 'Task created successfully',
            task: task
        });
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=createTask.js.map