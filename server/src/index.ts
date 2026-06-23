import 'dotenv/config';
import app from './app.js';
import userRouter from './routes/user.js';

const PORT: number = parseInt(process.env.PORT ?? '5000', 10);

app.use('/api/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
