import 'dotenv/config';
import app from './app.js';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import slotRouter from './routes/slot.js';
import revisionTaskRouter from './routes/revisionTask.js';

const PORT: number = parseInt(process.env.PORT ?? '5000', 10);

app.use('/api/user',           userRouter);
app.use('/api/tasks',          taskRouter);
app.use('/api/slots',          slotRouter);
app.use('/api/revision-tasks', revisionTaskRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
