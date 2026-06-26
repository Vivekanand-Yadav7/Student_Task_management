import { Request, Response } from "express";
import { allTasks } from "../services/allTask.js";
import { AuthRequest } from "../middleware/authCheck.js";

const allTaskController = async (req: Request, res: Response): Promise<void> => {
    await allTasks(req as AuthRequest, res);
};

export default allTaskController;