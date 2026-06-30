import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express();

const allowedOrigins = process.env.FRONTEND_URL
    ? [process.env.FRONTEND_URL]
    : ['http://localhost:5173', 'http://localhost:3000'];

// Middleware
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));
app.use(express.json());

// Serve static client build in production
if (process.env.NODE_ENV === 'production') {
    const clientBuild = path.join(__dirname, '../../client/dist');
    app.use(express.static(clientBuild));
    // SPA fallback — must be AFTER /api routes are registered
    app.get('*', (_req, res) => {
        res.sendFile(path.join(clientBuild, 'index.html'));
    });
}

export default app;

